import React from "react";
import styles from './style.module.scss';
import Subreddit from "../Subreddit";
import RButton from '../RButton/index';
import {DarkModeContext} from "../DarkModeProvider";

const SideSection = ({title, subreddits}) => {
    const {dark} = React.useContext(DarkModeContext);


    return <div className={dark ? styles.darkTopSection : styles.topSection}>
        <div className={styles.topBanner}>
            <a className={styles.topBannerText} href="#">Top Programming Communities</a>
        </div>
        <div className={styles.sectionBody}>
            <ul>
                {subreddits.map((subreddit, index) => {
                    return <li className={dark ? styles.darkSubredditContainer: styles.subredditContainer}><Subreddit {...subreddit} index={index}/></li>
                })}
            </ul>
        </div>
        <div className={styles.sectionFooter}>
            <RButton type='rSecondary' title='View All' fullWidth/>
            <div className={styles.sectionFooterCatalog}>

                <RButton type='rShadow' title='Near You'/>
                <RButton type='rShadow' title='Top'/>
                <RButton type='rShadow' title='Aww'/>
                <RButton type='rShadow' title='Gaming'/>

            </div>
        </div>
    </div>
}

export default SideSection;