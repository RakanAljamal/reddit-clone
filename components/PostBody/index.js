import React from 'react';
import styled from 'styled-components';
import {formatBodyLength} from "../../util/utils";
import {PostType} from "../../enum/PostType";

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
  margin: 0 8px;
  font-family: BentonSans, sans-serif;
  color: #222222;
  height: 200px;

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

const GetPost = (props, type) => {
    switch (type) {
        case PostType.ShortTitleShortBody:
            return <ShortTitleShortTextPost>
                <h3>{props.title}</h3>
                {/*<h3>{title}</h3>*/}
                <span>{formatBodyLength(props.body)}</span>
            </ShortTitleShortTextPost>
        case PostType.ShortTitleWithPhoto:
            return <ShortTitleShortTextPost {...props} />
    }
}
const PostBody = ({title, body, type}) => {

    return <div>
        <ShortTitleShortTextPost>
            <h3>{title}</h3>
            {/*<h3>{title}</h3>*/}
            <span>{formatBodyLength(body)}</span>
        </ShortTitleShortTextPost>
    </div>
}

export default PostBody;