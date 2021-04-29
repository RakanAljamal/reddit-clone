import styles from "../Chat/style.module.scss";
import FilterButton from "../FilterButton";
import React from "react";
import {AsyncChatGroups} from "../ChatUsers";

function LeftChatPanel({activeUser, setActiveUser}) {
    return <div className={styles.leftChatPanel}>
        <LeftChatPanelHeader/>
        <AsyncChatGroups activeUser={activeUser}  setActiveUser={setActiveUser}/>

    </div>;
}

function LeftChatPanelHeader() {
    return <div className={styles.leftChatPanelHeader}>
        <div>Chat</div>
        <div><FilterButton icon='Chat-Plus' hideBackground/></div>
    </div>;
}


export {LeftChatPanelHeader,LeftChatPanel};
