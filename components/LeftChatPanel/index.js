import styles from "../Chat/style.module.scss";
import FilterButton from "../FilterButton";
import React from "react";
import {ChatUsers} from "../ChatUsers";

function LeftChatPanel({activeMessage, messages, setActiveMessage, syncedData}) {
    return <div className={styles.leftChatPanel}>
        <LeftChatPanelHeader/>
        <ChatUsers activeMessage={activeMessage} messages={messages} syncedData={syncedData}  setActiveMessage={setActiveMessage}/>

    </div>;
}

function LeftChatPanelHeader() {
    return <div className={styles.leftChatPanelHeader}>
        <div>Chat</div>
        <div><FilterButton icon='Chat-Plus' hideBackground/></div>
    </div>;
}


export {LeftChatPanelHeader,LeftChatPanel};
