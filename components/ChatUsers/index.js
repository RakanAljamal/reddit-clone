import styles from "./style.module.scss";
import {getOtherUser} from "../../util/chat-utils";
import {DefaultProfileLogo} from "../CreatePostContainer";
import React, {useState} from "react";
import {useSubscription} from "@apollo/client";
import {GROUP_MESSAGES} from "../../graphql/Subscription";
import useUser from "../../effects/useUser";
import {ChatLoading} from "../ChatLoader";

const AsyncChatGroups = ({activeUser, setActiveUser}) => {
    const loggedInUser = useUser()
    let {data, loading} = useSubscription(GROUP_MESSAGES);
    const onSelection = (user) => {
        setActiveUser(user);
    }

    if (loading) {
        return <ChatLoading />
    }

    if (!loading && !activeUser) {
        setActiveUser(getOtherUser(loggedInUser, data.messageGroup[0]));
    }


    return <div className={styles.chatUsers}>
        {data.messageGroup.map(message => {
            return <ChatUser activeUser={activeUser}
                             message={message}
                             onSelect={(user) => onSelection(user)}/>
        })}
    </div>;
}


const ChatUser = ({message,activeUser,onSelect}) => {

    const loggedInUser = useUser();
    const otherUser = getOtherUser(loggedInUser, message);

    function handleSelect() {
        onSelect(otherUser);
    }

    return <div
        className={getOtherUser(loggedInUser, message).id === activeUser?.id ? styles.activeUser : styles.chatUser}
        onClick={() => handleSelect()}>
        <DefaultProfileLogo/>

        <div className={styles.messageHighlight}>
            <h4>{otherUser.name}</h4>
            <span>{message.content}</span>
        </div>
    </div>

}

export {AsyncChatGroups}
