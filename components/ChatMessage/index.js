import React, {useEffect, useRef, useState} from "react";
import _ from "lodash";
import styles from "../Chat/style.module.scss";
import {DefaultProfileLogo} from "../CreatePostContainer";
import useUser from "../../effects/useUser";
import {StyledCircularProgress} from "../ChatLoader";

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

const renderMessages = messages => {
    return messages.map(message => {
        return <>
            {showUserAvatar(message) && <div className={styles.userMessage}>
                <DefaultProfileLogo/>
                <span className={styles.userName}>{message.from.name}</span>
                <span className={styles.messageTime}>02:32 AM</span>
            </div>}

            <div className={styles.chatMessageContainer}>
                <ChatMessage message={message}/>
            </div>
            <ScrollToBottom />
        </>
    });
}
function ChatBodyMessages({messages}) {
    const [loading, setLoading] = useState(false);

    let chatBodyRef = useRef(null);

    useEffect(() => {
        chatBodyRef.addEventListener('scroll', () => {
            if ((chatBodyRef || {}).scrollTop === 0) {
                setLoading(true);
                setTimeout(() => setLoading(false), 2 * 1000);
            }
        })


    }, [messages]);

    return <div className={styles.chatBodyMessage} ref={el => chatBodyRef = el}>
        {loading && <StyledCircularProgress/>}
        {renderMessages(messages)}

    </div>;
}

export {ChatBodyMessages}
