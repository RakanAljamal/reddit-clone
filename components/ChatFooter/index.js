import styles from "./style.module.scss";
import React, {useState} from "react";
import {useMutation} from "@apollo/client";
import {POST_MESSAGE} from "../../graphql/Mutation";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationArrow} from "@fortawesome/free-solid-svg-icons";

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

function ChatBodyFooter({otherUser,synced}) {
    const [message, setMessage] = useState('');
    const [postMessage, {error, loading}] = useMutation(POST_MESSAGE);
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

export {ChatBodyFooter}
