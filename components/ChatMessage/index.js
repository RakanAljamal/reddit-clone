import React, {useEffect, useRef} from "react";
import _ from "lodash";
import {DefaultProfileLogo} from "../CreatePostContainer";
import useUser from "../../effects/useUser";
import styles from './style.module.scss';

const ScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
};

function ChatMessage({message}) {
    const loggedInUser = useUser();

    return <div className={loggedInUser.id === message.from.id ? styles.chatMessage : styles.selfUserChatMessage}>
        <span>{message.content}</span>
    </div>;
}

let activeAvatarUser = {};

const showUserAvatar = (message) => {
    const showAvatar = _.isEmpty(activeAvatarUser) || !_.isEqual(activeAvatarUser.from, message.from);
    activeAvatarUser = message;

    return showAvatar;
}

function ChatBodyMessages({messages}) {
    return <div className={styles.chatBodyMessage}>
        {messages.map(message => {
            return <>
                {showUserAvatar(message) && <div className={styles.userMessage}>
                    <DefaultProfileLogo/>
                    <span className={styles.userName}>{message.from.name}</span>
                    <span className={styles.messageTime}>02:32 AM</span>
                </div>}

                <div className={styles.chatMessageContainer}>
                    <ChatMessage message={message}/>
                </div>
                <ScrollToBottom/>
            </>
        })}

    </div>;
}

export {ChatBodyMessages}
