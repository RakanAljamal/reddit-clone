import React from 'react';
import {faBookmark, faCommentAlt, faEllipsisH, faShare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from './styles.module.scss';

const PostFooter = ({comments}) => {

    const {count} = comments;

    return <div className={styles.postFooter}>
        <div className={styles.comment}>
            <FontAwesomeIcon icon={faCommentAlt} flip={"horizontal"}/>
            <span>{count} Comments</span>
        </div>
        <div className={styles.share}>
            <FontAwesomeIcon icon={faShare}/>
            <span>Share</span>
        </div>
        <div className={styles.save}>
            <FontAwesomeIcon icon={faBookmark}/>
            <span>Save</span>
        </div>
        <div className={styles.options}>
            <FontAwesomeIcon icon={faEllipsisH}/>
        </div>

    </div>
}

export default PostFooter;