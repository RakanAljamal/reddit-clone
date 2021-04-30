import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faCog, faExternalLinkAlt, faTimes} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from './style.module.scss';
import {useNavbarOptions} from "../NavbarProvider";
function ChatBodyHeader({user}) {
    const {toggleChatDialog} = useNavbarOptions();
    return <div className={styles.chatBodyHeader}>
        <div className={styles.chatBodyHeaderUser}>
            <a>{user.name}</a>
        </div>
        <div className={styles.chatBodyHeaderOptions}>
            <FontAwesomeIcon color="#878a8c" icon={faCog}/>
            <FontAwesomeIcon color="#878a8c" icon={faExternalLinkAlt}/>
            <FontAwesomeIcon color="#878a8c" icon={faChevronDown}/>
            <FontAwesomeIcon cursor="pointer" onClick={toggleChatDialog} color="#878a8c" icon={faTimes}/>
        </div>
    </div>;
}

export {ChatBodyHeader}
