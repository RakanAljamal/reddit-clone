import React, {useEffect, useRef, useState} from 'react';
import styles from './style.module.scss'
import FilterButton from "../FilterButton";
import {DefaultProfileLogo} from "../CreatePostContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faCog, faExternalLinkAlt, faLocationArrow, faTimes} from "@fortawesome/free-solid-svg-icons";
import useUser from "../../effects/useUser";
import {useMutation, useQuery} from "@apollo/client";
import {LOGIN, POST_MESSAGE} from "../../graphql/Mutation";
import {getFirstGroup, getLastMessage, getOtherUser, groupMessages} from "../../util/chat-utils";
import {GET_MESSAGES} from "../../graphql/Query";
import _ from 'lodash';
import {CircularProgress} from "@material-ui/core";
import styled from "styled-components";
import {Skeleton} from "@material-ui/lab";

const StyledSkeleton = styled(Skeleton)`
    border-radius: 50px !important;
`;

const ChatLoading = ({otherUser}) =>{
    return <div className={styles.chatBody}>
        <ChatBodyHeader user={otherUser}/>
        <div className={styles.chatLoading}>
            <div>
                <StyledSkeleton variant="text" width={'90%'} height={'100%'} />
            </div>
            <div>
                <StyledSkeleton variant="text" width={'50%'} height={'100%'} />
            </div>
            <div>
                <StyledSkeleton variant="text" width={'20%'} height={'100%'} />
            </div>
            <div>
                <StyledSkeleton variant="text" width={'70%'} height={'100%'} />
            </div>
            <div>
                <StyledSkeleton variant="text" width={'90%'} height={'100%'} />
            </div>
            <div>
                <StyledSkeleton variant="text" width={'50%'} height={'100%'} />
            </div>
            <div>
                <StyledSkeleton variant="text" width={'20%'} height={'100%'} />
            </div>
            <div>
                <StyledSkeleton variant="text" width={'90%'} height={'100%'} />
            </div>
            <div>
                <StyledSkeleton variant="text" width={'50%'} height={'100%'} />
            </div>
            <div>
                <StyledSkeleton variant="text" width={'20%'} height={'100%'} />
            </div>
            <div>
                <StyledSkeleton variant="text" width={'70%'} height={'100%'} />
            </div>
            <div>
                <StyledSkeleton variant="text" width={'50%'} height={'100%'} />
            </div>
            <div>
                <StyledSkeleton variant="text" width={'70%'} height={'100%'} />
            </div>
            <div>
                <StyledSkeleton variant="text" width={'50%'} height={'100%'} />
            </div>
            <div>
                <StyledSkeleton variant="text" width={'20%'} height={'100%'} />
            </div>
            <div>
                <StyledSkeleton variant="text" width={'70%'} height={'100%'} />
            </div>  <div>
            <StyledSkeleton variant="text" width={'50%'} height={'100%'} />
        </div>
            <div>
                <StyledSkeleton variant="text" width={'20%'} height={'100%'} />
            </div>
            <div>
                <StyledSkeleton variant="text" width={'70%'} height={'100%'} />
            </div>
        </div>
        <ChatBodyFooter otherUser={otherUser}/>
    </div>
}
function ChatBody({message}) {
    const otherUser = getOtherUser(message);
    const {data, loading, err} = useQuery(GET_MESSAGES, {
        variables: {
            id: otherUser.id
        },
        fetchPolicy:'network-only'
    })


    if (loading) {
        return <ChatLoading otherUser={otherUser} />
    }
    return <div className={styles.chatBody}>
        <ChatBodyHeader user={otherUser}/>
        <ChatBodyMessages messages={data.messages}/>
        <ChatBodyFooter otherUser={otherUser}/>
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


function ChatBodyMessages({messages}) {
    let activeAvatarUser = {};
    const [loading,setLoading] = useState(false);
    const [scrollToBottom,setScrollToBottom] = useState(true);

    let bottomChatBody = useRef(null);
    let chatBodyRef = useRef(null);

    useEffect(() => {
       scrollToBottom && bottomChatBody.scrollIntoView();
        chatBodyRef.addEventListener('scroll',()=>{
                if((chatBodyRef || {}).scrollTop === 0) {
                    setScrollToBottom(false);
                    setLoading(true);
                    setTimeout(()=>setLoading(false),2 * 1000);
                }
        })
    });

    const StyledCircularProgress = styled(CircularProgress)`
      margin: auto;
    `;
    return <div className={styles.chatBodyMessage} ref={el => chatBodyRef=el}>
        {loading && <StyledCircularProgress/>}
        {messages.map(message => {

            const showUserAvatar = () => {
                const showAvatar = _.isEmpty(activeAvatarUser) || !_.isEqual(activeAvatarUser.from, message.from);
                activeAvatarUser = message;

                return showAvatar;
            }

            return <>
                {showUserAvatar() && <div className={styles.userMessage}>
                    <DefaultProfileLogo/>
                    <span className={styles.userName}>{message.from.name}</span>
                    <span className={styles.messageTime}>02:32 AM</span>
                </div>}

                <div className={styles.chatMessageContainer}>
                    <ChatMessage message={message}/>
                </div>
            </>
        })}

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

function ChatBodyFooter({otherUser}) {
    const [message, setMessage] = useState('');
    const [postMessage, {data, error, loading}] = useMutation(POST_MESSAGE);
    console.log(otherUser)
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


    let groupMessagesByUser = groupMessages(messages);
    const lastMessage = getLastMessage(getFirstGroup(groupMessagesByUser));

    const [activeMessage, setActiveMessage] = useState(lastMessage);
    return <div className={styles.chatBox}>

        <LeftChatPanel activeMessage={activeMessage} messages={groupMessagesByUser}
                       setActiveMessage={setActiveMessage}/>
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

export default ChatBox;