import React from 'react';
import styled from 'styled-components';
import {formatBodyLength} from "../../util/utils";
import {PostType} from "../../enum/PostType";
import styles from './styles.module.scss';

const ShortTitleShortTextPost = styled.div`
  line-height: 22px;
  margin: 0 8px;
  font-family: BentonSans, sans-serif;
  color: #222222;
  height: 140px;

  & > h3 {
    font-family: IBMPlexSans, Arial, sans-serif;;
    font-size: 18px;
    font-weight: 600;
  }

  & > span {
    font-size: 12px;
    line-height: 16px;
  }
`;
const ShortTitleWithPhotoPost = styled.div`
  line-height: 22px;
  font-family: BentonSans, sans-serif;
  color: #222222;
  height: 413px;

  & > h3 {
    font-family: IBMPlexSans, Arial, sans-serif;;
    font-size: 18px;
    font-weight: 600;
    margin-left: 4px;
    margin-bottom: 4px;
  }

  & > div {
    margin: 0;
    ${props => props.image && `background: url(${props.image}) center center/cover;`}
    max-width: 100%;
    max-height: 366px;
    height: 100%;
  }
`;

const getPost = (props) => {
    console.log(props)
    switch (props.type) {
        case PostType.ShortTitleShortBody:
            return <ShortTitleShortTextPost>
                <h3>{props.title}</h3>
                {/*<h3>{title}</h3>*/}
                <span>{formatBodyLength(props.body)}</span>
            </ShortTitleShortTextPost>
        case PostType.ShortTitleWithPhoto:
            return <ShortTitleWithPhotoPost {...props} >
                <h3>{props.title}</h3>
                <div/>
            </ShortTitleWithPhotoPost>
    }
};

const PostBody = (props) => {

    return <div className={styles.postBodyContainer}>
        {getPost(props)}
    </div>
}

export default PostBody;