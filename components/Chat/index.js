import React, {useState} from 'react';
import styles from './style.module.scss'
import {LeftChatPanel} from "../LeftChatPanel";
import {ChatBody} from "../ChatBody";



const ChatBox = () => {
    const [activeUser, setActiveUser] = useState(null);

    return <div className={styles.chatBox}>

        <LeftChatPanel activeUser={activeUser}
                       setActiveUser={setActiveUser}  />
        <ChatBody activeUser={activeUser} />
    </div>
}




export default ChatBox;
