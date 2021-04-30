import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faCog, faExternalLinkAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from './style.module.scss';
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

export {ChatBodyHeader}
