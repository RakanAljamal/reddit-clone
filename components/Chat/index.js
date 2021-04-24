import React, {useState} from 'react';
import styles from './style.module.scss'
import FilterButton from "../FilterButton";
import {DefaultProfileLogo} from "../CreatePostContainer";

function LeftChatPanelHeader() {
    return <div className={styles.leftChatPanelHeader}>
        <div>Chat</div>
        <div><FilterButton icon='Chat-Plus' hideBackground/></div>
    </div>;
}

const ChatUser = ({activeUser, user, onSelect}) => {


    return <div className={ activeUser.id===user.id  ? styles.activeUser : styles.chatUser} onClick={() => onSelect(user)}>
        <DefaultProfileLogo/>
        <div className={styles.messageHighlight}>
            <h4>{user.name}</h4>
            <span>To be honest it's for me</span>
        </div>
    </div>

}

function ChatUsers({activeUser, users, setActiveUser}) {

    const onSelection = (user) => {
        setActiveUser(user);
    }

    return <div className={styles.chatUsersContainer}>
        <div className={styles.chatUsers}>
            {users.map(user => {
                return <ChatUser activeUser={activeUser} user={user} onSelect={(user) => onSelection(user)}/>
            })}
        </div>
    </div>
}

function LeftChatPanel({activeUser, users, setActiveUser}) {
    return <div className={styles.leftChatPanel}>
        <LeftChatPanelHeader/>
        <ChatUsers activeUser={activeUser} users={users} setActiveUser={setActiveUser}/>

    </div>;
}

function ChatBodyHeader({user}) {
    return <div className={styles.chatBodyHeader}>
        <h4>{user.name}</h4>
        <div className={styles.chatBodyHeaderOptions}>
            <span>Hio</span>
        </div>
    </div>;
}

function ChatBodyMessages() {
    return <div>

    </div>;
}

function ChatBodyFooter() {
    return <div>

    </div>;
}

function ChatBody({user}) {
    return <div className={styles.chatBody}>
        <ChatBodyHeader user={user}/>
        <ChatBodyMessages/>
        <ChatBodyFooter/>
    </div>;
}

const ChatBox = () => {
    const users = [{id:1,name: 'Hanin'}, {id:2,name: 'Rakan'}]

    const [activeUser, setActiveUser] = useState(users[0]);
    console.log(activeUser);
    return <div className={styles.chatBox}>

        <LeftChatPanel activeUser={activeUser} users={users} setActiveUser={setActiveUser}/>
        <ChatBody user={activeUser}/>
    </div>
}

export default ChatBox;