import React from 'react';
import styles from './styles.module.scss';
import Post from "../Post";

const PostSection = () => {
    return <div className={styles.postSection}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
}

export default PostSection;