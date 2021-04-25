import React, {useState} from 'react';
import styles from './style.module.scss'
import FilterButton from "../FilterButton";
import CreatePostContainer, {DefaultProfileLogo} from "../CreatePostContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faCog, faExternalLinkAlt, faLocationArrow, faTimes} from "@fortawesome/free-solid-svg-icons";
import useUser from "../../effects/useUser";

function LeftChatPanelHeader() {
    return <div className={styles.leftChatPanelHeader}>
        <div>Chat</div>
        <div><FilterButton icon='Chat-Plus' hideBackground/></div>
    </div>;
}

const ChatUser = ({activeUser, user, onSelect}) => {


    return <div className={activeUser.id === user.id ? styles.activeUser : styles.chatUser}
                onClick={() => onSelect(user)}>
        <DefaultProfileLogo/>
        <div className={styles.messageHighlight}>
            <h4>{user.name}</h4>
            <span>{user.messages[0].content}</span>
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
        <div className={styles.chatBodyHeaderUser}>
            <a>{user.name}</a>
        </div>
        <div className={styles.chatBodyHeaderOptions}>
            <FontAwesomeIcon color="#878a8c" icon={faCog}/>
            <FontAwesomeIcon color="#878a8c" icon={faExternalLinkAlt}/>
            <FontAwesomeIcon color="#878a8c" icon={faChevronDown}/>
            <FontAwesomeIcon color="#878a8c" icon={faTimes}/>
        </div>
    </div>;
}

function ChatMessage({user,message}) {
    const loggedInUser = useUser();
    console.log(loggedInUser)
    return <div className={parseInt(loggedInUser?.id) === user.id ? styles.chatMessage : styles.selfUserChatMessage}>
        <span>{message}</span>
    </div>;
}


function ChatBodyMessages({user}) {

    return <div className={styles.chatBodyMessage}>
        <div className={styles.userMessage}>
            <DefaultProfileLogo/>
            <span className={styles.userName}>{user.name}</span>
            <span className={styles.messageTime}>02:32 AM</span>
        </div>
        <div className={styles.chatMessageContainer}>
            {user.messages.map((_, index, array) => {
                return <ChatMessage user={user} message={user.messages[array.length - 1 - index].content}/>
            })}
        </div>

    </div>;
}

function Textarea() {
    return <textarea placeholder='Message' className={styles.sendMessage}>

    </textarea>;
}

function ChatBodyFooter() {
    return <div className={styles.chatFooter}>
        <Textarea />
        <FontAwesomeIcon icon={faLocationArrow} />
    </div>;
}

function ChatBody({user}) {
    return <div className={styles.chatBody}>
        <ChatBodyHeader user={user}/>
        <ChatBodyMessages user={user}/>
        <ChatBodyFooter/>
    </div>;
}

const ChatBox = () => {
    const users = [{
        id: 11, name: 'Hanin', messages: [{
            content: "That's insane"
        }, {
            content: "Impressive"
        }, {
            content: "Thank you so much!!"
        },{
            content: "I Love you"
        }]
    }]

    const [activeUser, setActiveUser] = useState(users[0]);
    console.log(activeUser);
    return <div className={styles.chatBox}>

        <LeftChatPanel activeUser={activeUser} users={users} setActiveUser={setActiveUser}/>
        <ChatBody user={activeUser}/>
    </div>
}

export default ChatBox;