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
import useUser from "../../effects/useUser";

function ASyncedMessages({activeUser}) {

    const {data: syncedData, loading: subLoading, error: subError} = useSubscription(MESSAGED_ADDED, {
        variables: {
            id: activeUser.id
        }
    });

    if (subLoading) {
        return <ChatLoading />
    }
    return <ChatBodyMessages messages={syncedData? syncedData.messageAdded : []}/>

}

function ChatBody({activeUser}) {
    if(!activeUser){
        return <></>
    }


    return <div className={styles.chatBody}>
        <ChatBodyHeader user={activeUser}/>
        <ASyncedMessages activeUser={activeUser} />
        <ChatBodyFooter otherUser={activeUser}/>
    </div>;
}

export {ChatBody}
