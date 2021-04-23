import React, {useContext} from 'react';
import {formatLink} from "../../util/utils";
import {PostType} from "../../enum/PostType";
import styles from './styles.module.scss';
import {faExternalLinkAlt, faLink} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {LinkedDiv, ShortTitleShortTextPost, ShortTitleWithLinkPost, ShortTitleWithPhotoPost} from "./custom-styled";
import {DarkModeContext} from "../DarkModeProvider";

const getPost = (props) => {
    console.log(props);
    const {dark}  = useContext(DarkModeContext);
    switch (props.type || 'ShortTitleShortBody') {
        case PostType.ShortTitleShortBody:
            return <ShortTitleShortTextPost dark={dark}>
                <h3>{props.title}</h3>
                <span>{props.content}</span>
            </ShortTitleShortTextPost>
        case PostType.ShortTitleWithPhoto:

            return <div>
                <h3 className={dark? styles.darkTitle : styles.title}>{props.title}</h3>
                <ShortTitleWithPhotoPost {...props} dark={dark}>
                    <div/>
                </ShortTitleWithPhotoPost>
            </div>
        case PostType.ShortTitleWithLink:
            return <ShortTitleWithLinkPost {...props} dark={dark}>
                <div>
                    <h3 className={dark? styles.darkTitle : styles.title}>{props.title}</h3>
                    <a href={props.body}>{formatLink(props.body)} <FontAwesomeIcon icon={faExternalLinkAlt}/>
                    </a>

                </div>
                <div className={styles.postWithLinkContainer}>
                    <LinkedDiv dark={dark}>
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