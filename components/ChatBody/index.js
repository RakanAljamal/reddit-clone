import {getOtherUser} from "../../util/chat-utils";
import {useQuery, useSubscription} from "@apollo/client";
import {GET_MESSAGES} from "../../graphql/Query";
import styles from "../Chat/style.module.scss";
import React, {useEffect, useState} from "react";
import {ChatLoading} from "../ChatLoader";
import {ChatBodyHeader} from "../ChatBodyHeader";
import {ChatBodyFooter} from "../ChatFooter";
import {ChatBodyMessages} from "../ChatMessage";
import {MESSAGED_ADDED} from "../../graphql/Subscription";

function ASyncedMessages({message,otherUser}) {

    const {data: syncedData, loading: subLoading, error: subError} = useSubscription(MESSAGED_ADDED, {
        variables: {
            id: otherUser.id
        }
    });

    if (subLoading) {
        return <ChatLoading />
    }
    return <ChatBodyMessages messages={syncedData? syncedData.messageAdded : []}/>

}

function ChatBody({message}) {
    if(!message){
        return <></>
    }
    const otherUser = getOtherUser(message);
    const [hello, setHello] = useState(0);
    const [synced, setUseSynced] = useState(false);

    useEffect(() => {

        return () => {
            setTimeout(() => setUseSynced(false), 3000);
        }
    }, [message])

    const {data, loading, err} = useQuery(GET_MESSAGES, {
        variables: {
            id: otherUser.id
        },
        fetchPolicy: 'no-cache'
    })
    if (loading) {
        return <ChatLoading otherUser={otherUser}/>
    }

    return <div className={styles.chatBody}>
        <ChatBodyHeader user={otherUser}/>
        <ASyncedMessages message={message} otherUser={otherUser}/>
        <ChatBodyFooter otherUser={otherUser}/>
    </div>;
}

export {ChatBody}
