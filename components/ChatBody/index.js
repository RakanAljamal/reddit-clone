import {useSubscription} from "@apollo/client";
import React from "react";
import {ChatLoading} from "../ChatLoader";
import {ChatBodyHeader} from "../ChatBodyHeader";
import {ChatBodyFooter} from "../ChatFooter";
import {ChatBodyMessages} from "../ChatMessage";
import {MESSAGED_ADDED} from "../../graphql/Subscription";
import styles from './style.module.scss';

function ASyncedMessages({activeUser}) {

    const {data, loading, error} = useSubscription(MESSAGED_ADDED, {
        variables: {
            id: activeUser.id
        }
    });

    if (loading) {
        return <ChatLoading/>
    }
    return <ChatBodyMessages messages={data ? data.messageAdded : []}/>

}

function ChatBody({activeUser}) {
    if (!activeUser) {
        return <div />
    }


    return <div className={styles.chatBody}>
        <ChatBodyHeader user={activeUser}/>
        <ASyncedMessages activeUser={activeUser}/>
        <ChatBodyFooter otherUser={activeUser}/>
    </div>;
}

export {ChatBody}
