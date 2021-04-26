import React, {useState} from 'react';
import styles from './style.module.scss'
import FilterButton from "../FilterButton";
import {DefaultProfileLogo} from "../CreatePostContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faCog, faExternalLinkAlt, faLocationArrow, faTimes} from "@fortawesome/free-solid-svg-icons";
import useUser from "../../effects/useUser";
import {useMutation} from "@apollo/client";
import {POST_MESSAGE} from "../../graphql/Mutation";
import {getFirstGroup, getLastMessage, getOtherUser, groupMessages} from "../../util/chat-utils";






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

function ChatMessage({user, message}) {
    const loggedInUser = useUser();

    return <div className={parseInt(loggedInUser?.id) === user.id ? styles.chatMessage : styles.selfUserChatMessage}>
        <span>{message.content}</span>
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
            {user.messages.map(message => {
                return <ChatMessage user={user} message={message}/>
            })}
        </div>

    </div>;
}

function Textarea({value, sendMessage, onMessageChange}) {


    const handleChange = (e) => onMessageChange(e.target.value);

    const handleSendMessage = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    }
    return <textarea value={value} placeholder='Message' className={styles.sendMessage} onKeyDown={handleSendMessage}
                     onChange={handleChange}>

    </textarea>;
}

function ChatBodyFooter({user}) {
    const [message, setMessage] = useState('');
    const [postMessage, {data, error, loading}] = useMutation(POST_MESSAGE);

    const sendMessage = () => {
        if (message.trim().length < 1) {
            return;
        }

        postMessage({
            variables: {
                data: {
                    content: message,
                    to: 'rakanaljamal@hotmail.com'
                }
            }
        })

        if (error) {
            console.log(error);
        }
        if (!loading) {
            // console.log(data);
        }

        setMessage('');

    }
    return <div className={styles.chatFooter}>
        <Textarea value={message} sendMessage={sendMessage} onMessageChange={(msg) => setMessage(msg)}/>
        <FontAwesomeIcon cursor="pointer" onClick={sendMessage} icon={faLocationArrow}
                         opacity={message.trim().length > 0 ? '1' : '0.3'}/>
    </div>;
}

function ChatBody({message}) {
    const otherUser = getOtherUser(message);

    return <div className={styles.chatBody}>
        <ChatBodyHeader user={otherUser} />
        {/*<ChatBodyMessages message={message}/>*/}
        {/*<ChatBodyFooter user={user}/>*/}
    </div>;
}

const ChatBox = ({data: {messages}}) => {


    let groupMessagesByUser = groupMessages(messages);

    const lastMessage =getLastMessage(getFirstGroup(groupMessagesByUser));

    const [activeMessage, setActiveMessage] = useState(lastMessage);
    return <div className={styles.chatBox}>

        <LeftChatPanel activeMessage={activeMessage} messages={groupMessagesByUser} setActiveMessage={setActiveMessage}/>
        <ChatBody message={activeMessage}/>
    </div>
}
function LeftChatPanel({activeMessage, messages, setActiveMessage}) {
    return <div className={styles.leftChatPanel}>
        <LeftChatPanelHeader/>
        <ChatUsers activeMessage={activeMessage} messages={messages} setActiveMessage={setActiveMessage}/>

    </div>;
}

function LeftChatPanelHeader() {
    return <div className={styles.leftChatPanelHeader}>
        <div>Chat</div>
        <div><FilterButton icon='Chat-Plus' hideBackground/></div>
    </div>;
}


function ChatUsers({activeMessage, messages, setActiveMessage}) {

    const onSelection = (message) => {
        setActiveMessage(message);
    }



    return <div className={styles.chatUsersContainer}>
        <div className={styles.chatUsers}>
            {Object.values(messages).map((messageByUser) => {
                const lastMessageFromList = getLastMessage(messageByUser);
                return <ChatUser activeMessage={activeMessage} message={lastMessageFromList}
                                 onSelect={(message) => onSelection(message)}/>
            })}
        </div>
    </div>
}

const ChatUser = ({activeMessage, message, onSelect}) => {
    return <div className={message === activeMessage ? styles.activeUser : styles.chatUser}
                onClick={() => onSelect(message)}>
        <DefaultProfileLogo/>

        <div className={styles.messageHighlight}>
            <h4>{message.from.name}</h4>
            <span>{message.content}</span>
        </div>
    </div>

}

export default ChatBox;