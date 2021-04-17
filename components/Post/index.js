import React from 'react';
import styles from './styles.module.scss';
import RButton from "../RButton";


// const RPost = styled.div`
//   background: #fff;
//   width: 100%;
//   height: 200px;
//   margin-bottom: 10px;
// `;


const Post = () => {
    return <a href='#' className={styles.postContainer}>
        <div className={styles.leftSectionPost}>
            <span className={styles.upvote}/>
            <span className={styles.votes}>20.4k</span>
            <span className={styles.downvote}/>
        </div>
        <div className={styles.mainSectionPost}>
            <div className={styles.postHeader}>

                <RButton type='rJoin' title='Join'/>
            </div>
            <div className={styles.postBody}>

            </div>
            <div className={styles.postFooter}>

            </div>

        </div>
    </a>
}

export default Post;