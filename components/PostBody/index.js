import React from 'react';
import {formatLink} from "../../util/utils";
import {PostType} from "../../enum/PostType";
import styles from './styles.module.scss';
import {faExternalLinkAlt, faLink} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {LinkedDiv, ShortTitleShortTextPost, ShortTitleWithLinkPost, ShortTitleWithPhotoPost} from "./custom-styled";

const getPost = (props) => {
    console.log(props)
    switch (props.type) {
        case PostType.ShortTitleShortBody:
            return <ShortTitleShortTextPost>
                <h3>{props.title}</h3>
                <span>{props.body}</span>
            </ShortTitleShortTextPost>
        case PostType.ShortTitleWithPhoto:

            return <div>
                <h3 className={styles.title}>{props.title}</h3>
                <ShortTitleWithPhotoPost {...props} >
                    <div/>
                </ShortTitleWithPhotoPost>
            </div>
        case PostType.ShortTitleWithLink:
            return <ShortTitleWithLinkPost {...props} >
                <div>
                    <h3>{props.title}</h3>
                    <a href={props.body}>{formatLink(props.body)} <FontAwesomeIcon icon={faExternalLinkAlt}/>
                    </a>

                </div>
                <div className={styles.postWithLinkContainer}>
                    <LinkedDiv>
                        <FontAwesomeIcon icon={faLink}/>
                        <FontAwesomeIcon icon={faExternalLinkAlt}/>
                    </LinkedDiv>
                </div>
            </ShortTitleWithLinkPost>
    }
};

const PostBody = (props) => {
    return <div className={styles.postBodyContainer}>
        {getPost(props)}
    </div>
}

export default PostBody;