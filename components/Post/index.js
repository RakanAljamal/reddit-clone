import React from 'react';
import styles from './styles.module.scss';
import PostHeader from "../PostHeader";
import PostBody from "../PostBody";
import PostFooter from "../PostFooter";


const Post = (props) => {
    return <span className={styles.postContainer}>
        <div className={styles.leftSectionPost}>
            <span className={styles.upvote}/>
            <span className={styles.votes}>20.4k</span>
            <span className={styles.downvote}/>
        </div>
        <div className={styles.mainSectionPost}>
            <div className={styles.postHeader}>
                <PostHeader {...props} />
            </div>
            <div className={styles.postBody}>
                <PostBody {...props}/>
            </div>
            <div className={styles.postFooter}>
                <PostFooter {...props}/>
            </div>

        </div>
    </span>
}

export default Post;