import React from 'react';
import {faBookmark, faCommentAlt, faShare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from './styles.module.scss';

const PostFooter = () => {
    return <div className={styles.postFooter}>
        <div className={styles.comment}>
            <FontAwesomeIcon icon={faCommentAlt} flip={"horizontal"}/>
            <span>11.7k Comments</span>
        </div>
        <div className={styles.share}>
            <FontAwesomeIcon icon={faShare}/>
            <span>11.7k Comments</span>
        </div>
        <div className={styles.save}>
            <FontAwesomeIcon icon={faBookmark}/>
            <span>11.7k Comments</span>
        </div>

    </div>
}

export default PostFooter;