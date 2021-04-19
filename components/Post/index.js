import React, {useContext} from 'react';
import styles from './styles.module.scss';
import PostHeader from "../PostHeader";
import PostBody from "../PostBody";
import PostFooter from "../PostFooter";
import {DarkModeContext} from "../DarkModeProvider";


const Post = (props) => {
    const {dark} = useContext(DarkModeContext);
    return <span className={dark ? styles.darkPostContainer : styles.postContainer}>
        <div className={dark ? styles.darkLeftSectionPost : styles.leftSectionPost}>
            <span className={dark ? styles.darkUpvote : styles.upvote}/>
            <span className={styles.votes}>20.4k</span>
            <span className={dark ? styles.darkDownvote : styles.downvote}/>
        </div>
        <div className={styles.mainSectionPost}>
            <div>
                <PostHeader {...props} />
            </div>
            <div>
                <PostBody {...props}/>
            </div>
            <div>
                <PostFooter {...props}/>
            </div>

        </div>
    </span>
}

export default Post;