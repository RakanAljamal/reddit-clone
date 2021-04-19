import React, {useContext} from "react";
import styles from './styles.module.scss';
import {formatSubredditName} from "../../util/utils";
import {DarkModeContext} from "../DarkModeProvider";

const showDefaultOrLogo = (logo) => {
    const {dark} = useContext(DarkModeContext);
    return logo ?
        <img className={dark ? styles.darkSubredditLogo : styles.subredditLogo} src={logo} alt='logo'/>

        : <svg className={styles.subRedditDefaultLogo} xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20" role="presentation">
            <path
                d="M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"/>
        </svg>


}
const Subreddit = ({index, logo, name, hideArrow, hideIndex}) => {
    const {dark} = useContext(DarkModeContext);
    return <a href='#'>
        <div className={styles.subredditItem}>
            {!hideIndex && <span>{index + 1}</span>}
            {!hideArrow && <svg className={styles.subredditArrow} viewBox="0 0 10 8" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path
                        d="M4.152 1.3568C4.54367 0.730128 5.45633 0.730129 5.848 1.3568L9.04375 6.47C9.46003 7.13605 8.98119 8 8.19575 8H1.80425C1.01881 8 0.539969 7.13605 0.956249 6.47L4.152 1.3568Z"/>
                </g>
            </svg>
            } {showDefaultOrLogo(logo)}
            <span className={dark && styles.darkSubredditName}>{formatSubredditName(name)}</span>
        </div>
    </a>
}

export default Subreddit;