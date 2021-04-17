import React from 'react';
import styles from './styles.module.scss';
import Post from "../Post";

const PostSection = ({posts}) => {
    return <div className={styles.postSection}>
        {posts.map(post => {
            return <Post {...post} />
        })}
    </div>
};

export default PostSection;