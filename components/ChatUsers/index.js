import styles from "../Chat/style.module.scss";
import {checkActiveMessage, getOtherUser} from "../../util/chat-utils";
import {DefaultProfileLogo} from "../CreatePostContainer";
import React, {useEffect} from "react";
import {useSubscription} from "@apollo/client";
import {GROUP_MESSAGES} from "../../graphql/Subscription";

const AsyncChatGroups = ({activeMessage,setActiveMessage}) => {
    let {data, error, loading} = useSubscription(GROUP_MESSAGES);
    const onSelection = (message) => {
        setActiveMessage(message);
    }
    if (error) {
        console.log(error);
    }

    useEffect(()=>{
        if(data){
            setActiveMessage(data.messageGroup[0]);
        }
    },[loading])
    if(loading){
        return <h1>Chat loading</h1>
    }
    if (!loading) {
        console.log(data);
    }


    return <div className={styles.chatUsers}>
        {data.messageGroup.map(message=>{
            return <ChatUser activeMessage={activeMessage}
                             message={message}
                             onSelect={(message) => onSelection(message)}/>
        })}
    </div>;
}


const ChatUser = ({activeMessage, message, onSelect}) => {
    const otherUser = getOtherUser(message);
    return <div className={checkActiveMessage(message,activeMessage) ? styles.activeUser : styles.chatUser}
                onClick={() => onSelect(message)}>
        <DefaultProfileLogo/>

        <div className={styles.messageHighlight}>
            <h4>{otherUser.name}</h4>
            <span>{message.content}</span>
        </div>
    </div>

}

export {AsyncChatGroups}
