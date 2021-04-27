import React, {useEffect, useRef, useState} from 'react';
import styles from './style.module.scss'
import FilterButton from "../FilterButton";
import {DefaultProfileLogo} from "../CreatePostContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faCog, faExternalLinkAlt, faLocationArrow, faTimes} from "@fortawesome/free-solid-svg-icons";
import useUser from "../../effects/useUser";
import {useMutation, useQuery, useSubscription} from "@apollo/client";
import {POST_MESSAGE} from "../../graphql/Mutation";
import {getFirstGroup, getLastMessage, getOtherUser, groupMessages} from "../../util/chat-utils";
import {GET_MESSAGES} from "../../graphql/Query";
import _ from 'lodash';
import {CircularProgress} from "@material-ui/core";
import styled from "styled-components";
import {Skeleton} from "@material-ui/lab";
import {MESSAGED_ADDED} from "../../graphql/Subscription";

const StyledSkeleton = styled(Skeleton)`
  border-radius: 50px !important;
`;

const ChatLoading = ({otherUser}) => {
    return <div className={styles.chatBody}>
        <ChatBodyHeader user={otherUser}/>
        <div className={styles.chatLoading}>
            <div>
                <StyledSkeleton variant="text" width={'90%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'50%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'20%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'70%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'90%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'50%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'20%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'90%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'50%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'20%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'70%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'50%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'70%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'50%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'20%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'70%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'50%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'20%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'70%'} height={'100%'}/>
            </div>
        </div>
        <ChatBodyFooter otherUser={otherUser}/>
    </div>
}

function ChatBody({message, updateLastMessage}) {
    const otherUser = getOtherUser(message);
    const {data, loading, err} = useQuery(GET_MESSAGES, {
        variables: {
            id: otherUser.id
        },
        fetchPolicy:'network-only'
    })

    if (err) {
        // console.log(err);
    }

    if (loading) {
        return <ChatLoading otherUser={otherUser}/>
    }

    return <div className={styles.chatBody}>
        <ChatBodyHeader user={otherUser}/>
        <ChatBodyMessages  messages={data.messages}/>
        <ChatBodyFooter updateLastMessage={updateLastMessage} otherUser={otherUser}/>
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

function ChatMessage({message}) {
    const loggedInUser = useUser();

    return <div className={loggedInUser.id === message.from.id ? styles.chatMessage : styles.selfUserChatMessage}>
        <span>{message.content}</span>
    </div>;
}


const StyledCircularProgress = styled(CircularProgress)`
  margin: auto;
`;

function ChatBodyMessages({messages}) {
    const {data: syncedData, subError, subLoad} = useSubscription(MESSAGED_ADDED);
    let activeAvatarUser = {};
    const [loading, setLoading] = useState(false);
    const [scrollToBottom, setScrollToBottom] = useState(true);

    let bottomChatBody = useRef(null);
    let chatBodyRef = useRef(null);

    useEffect(() => {
        scrollToBottom && bottomChatBody.scrollIntoView();
        setScrollToBottom(false);
        chatBodyRef.addEventListener('scroll', () => {
            if ((chatBodyRef || {}).scrollTop === 0) {
                setScrollToBottom(false);
                setLoading(true);
                setTimeout(() => setLoading(false), 2 * 1000);
            }
        })

    }, [messages]);

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
            </>
        });
    }
    return <div className={styles.chatBodyMessage} ref={el => chatBodyRef = el}>
        {loading && <StyledCircularProgress/>}
        {syncedData ? renderMessages(syncedData.messageAdded) : renderMessages(messages)}

        <div ref={(el) => bottomChatBody = el}>

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

function ChatBodyFooter({otherUser,updateLastMessage}) {
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
                    to: otherUser.email
                }
            }
        }).then(res=>{
            updateLastMessage(res.data.postMessage);
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


const ChatBox = ({data: {messages}}) => {

    const [syncedMessage,setSyncedMessage] = useState(null);
    const {data: syncedData, subError, subLoad} = useSubscription(MESSAGED_ADDED);
    let groupMessagesByUser = groupMessages(syncedData?.messageAdded.messages || messages);
    const lastMessage = getLastMessage(getFirstGroup(groupMessagesByUser));



    const [activeMessage, setActiveMessage] = useState(lastMessage);
    return <div className={styles.chatBox}>

        <LeftChatPanel activeMessage={activeMessage} messages={groupMessagesByUser}
                       setActiveMessage={setActiveMessage} syncedMessage={syncedMessage}/>
        <ChatBody message={activeMessage} updateLastMessage={setSyncedMessage}/>
    </div>
}

function LeftChatPanel({activeMessage, messages, setActiveMessage,syncedMessage}) {
    return <div className={styles.leftChatPanel}>
        <LeftChatPanelHeader/>
        <ChatUsers activeMessage={activeMessage} messages={messages} syncedMessage={syncedMessage} setActiveMessage={setActiveMessage}/>

    </div>;
}

function LeftChatPanelHeader() {
    return <div className={styles.leftChatPanelHeader}>
        <div>Chat</div>
        <div><FilterButton icon='Chat-Plus' hideBackground/></div>
    </div>;
}


function ChatUsers({activeMessage, messages, setActiveMessage, syncedMessage}) {

    const onSelection = (message) => {
        setActiveMessage(message);
    }

    return <div className={styles.chatUsersContainer}>
        <div className={styles.chatUsers}>
            {Object.values(messages).map((messageByUser) => {
                const lastMessageFromList = getLastMessage(messageByUser);
                return <ChatUser syncedMessage={syncedMessage} activeMessage={activeMessage} message={lastMessageFromList}
                                 onSelect={(message) => onSelection(message)}/>
            })}
        </div>
    </div>
}

const ChatUser = ({activeMessage, message, syncedMessage, onSelect}) => {
    const otherUser = getOtherUser(message);
    return <div className={message === activeMessage ? styles.activeUser : styles.chatUser}
                onClick={() => onSelect(message)}>
        <DefaultProfileLogo/>

        <div className={styles.messageHighlight}>
            <h4>{otherUser.name}</h4>
            <span>{syncedMessage?.to.id === message.to.id ? syncedMessage.content : message.content}</span>
        </div>
    </div>

}

export default ChatBox;
