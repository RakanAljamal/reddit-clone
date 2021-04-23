import React, {useContext} from 'react';
import styles from './styles.module.scss';
import PostHeader from "../PostHeader";
import PostBody from "../PostBody";
import PostFooter from "../PostFooter";
import {DarkModeContext} from "../DarkModeProvider";
import ForwardIcon from '@material-ui/icons/Forward';
import styled from "styled-components";

const UpVote = styled(ForwardIcon)`
  height: 19px !important;
  transform: rotate(-90deg);
  
  &:hover{
    fill: #ff4500;
  }
`;

const DownVote = styled(ForwardIcon)`
  transform: rotate(90deg);
  height: 19px !important;

  &:hover{
    fill: #5a75cc;
  }
`;

const Post = (props) => {
    const {dark} = useContext(DarkModeContext);
    return <span className={dark ? styles.darkPostContainer : styles.postContainer}>
        <div className={dark ? styles.darkLeftSectionPost : styles.leftSectionPost}>
            <UpVote/>
            <span className={styles.votes}>20.4k</span>
           <DownVote/>
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