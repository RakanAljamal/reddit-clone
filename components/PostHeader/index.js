import React from 'react';
import Subreddit from "../Subreddit";
import styles from './style.module.scss';
import RButton from "../RButton";
import {formatUserName} from "../../util/utils";

const PostHeader = ({subreddit, author, date}) => {

    console.log(subreddit);
    return <div className={styles.postHeader}>
        <Subreddit hideArrow hideIndex {...subreddit} />
        <span className={styles.separator}>.</span>
        <span className={styles.author}>   Posted by {formatUserName(author.name)} 4h ago</span>
        <RButton type='rJoin' title='Join'/>
    </div>
}

export default PostHeader;