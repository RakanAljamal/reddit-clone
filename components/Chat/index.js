import React, {useState} from 'react';
import styles from './style.module.scss'
import {getFirstGroup, getLastMessage, groupMessages} from "../../util/chat-utils";
import {LeftChatPanel} from "../LeftChatPanel";
import {ChatBody} from "../ChatBody";



const ChatBox = ({data: {messages},syncedData}) => {
    let groupMessagesByUser = groupMessages(syncedData?.messageAdded.messages || messages);
    const lastMessage = getLastMessage(getFirstGroup(groupMessagesByUser));
    const [activeMessage, setActiveMessage] = useState(lastMessage);

    return <div className={styles.chatBox}>

        <LeftChatPanel activeMessage={activeMessage} messages={groupMessagesByUser}
                       setActiveMessage={setActiveMessage}  />
        <ChatBody message={activeMessage} />
    </div>
}




export default ChatBox;
