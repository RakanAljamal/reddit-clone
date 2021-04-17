import React from 'react';
import Subreddit from "../Subreddit";
import styles from './style.module.scss';
import RButton from "../RButton";
import {formatUserName} from "../../util/utils";

const PostHeader = ({subreddit, user, date}) => {

    return <div className={styles.postHeader}>
        <Subreddit hideArrow hideIndex {...subreddit} />
        <span className={styles.separator}>.</span>
        <span className={styles.author}>   Posted by {formatUserName(user)} {date}</span>
        <RButton type='rJoin' title='Join'/>
    </div>
}

export default PostHeader;