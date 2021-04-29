import React, {useState} from 'react';
import styles from './style.module.scss'
import {LeftChatPanel} from "../LeftChatPanel";
import {ChatBody} from "../ChatBody";



const ChatBox = ({data: {messages},syncedData}) => {
    const [activeMessage, setActiveMessage] = useState(null);

    return <div className={styles.chatBox}>

        <LeftChatPanel activeMessage={activeMessage}
                       setActiveMessage={setActiveMessage}  />
        <ChatBody message={activeMessage} />
    </div>
}




export default ChatBox;
