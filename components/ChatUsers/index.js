import styles from "../Chat/style.module.scss";
import {getLastMessage, getOtherUser} from "../../util/chat-utils";
import {DefaultProfileLogo} from "../CreatePostContainer";
import React from "react";

function ChatUsers({activeMessage, messages, setActiveMessage, syncedData}) {

    const onSelection = (message) => {
        setActiveMessage(message);
    }

    return <div className={styles.chatUsersContainer}>
        <div className={styles.chatUsers}>
            {Object.values(messages).map((messageByUser) => {
                const lastMessageFromList = getLastMessage(messageByUser);
                return <ChatUser  activeMessage={activeMessage} message={lastMessageFromList}
                                  onSelect={(message) => onSelection(message)}/>
            })}
        </div>
    </div>
}

const ChatUser = ({activeMessage, message, onSelect}) => {
    const otherUser = getOtherUser(message);
    return <div className={message === activeMessage ? styles.activeUser : styles.chatUser}
                onClick={() => onSelect(message)}>
        <DefaultProfileLogo/>

        <div className={styles.messageHighlight}>
            <h4>{otherUser.name}</h4>
            <span>{message.content}</span>
        </div>
    </div>

}

export {ChatUsers}
