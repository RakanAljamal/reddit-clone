import React from "react";
import styles from './style.module.scss';
import Subreddit from "../Subreddit";
import RButton from '../RButton/index';
import {DarkModeContext} from "../DarkModeProvider";
import RedditIcon from "../RedditIcon";

const CommunitySection = ({dark, subreddits}) => <div className={dark ? styles.darkTopSection : styles.topSection}>
    <div className={styles.topBanner}>
        <a className={styles.topBannerText} href="#">Top Programming Communities</a>
    </div>
    <div className={styles.sectionBody}>
        <ul>
            {subreddits.map((subreddit, index) => {
                return <li className={dark ? styles.darkSubredditContainer : styles.subredditContainer}>
                    <Subreddit {...subreddit} index={index}/></li>
            })}
        </ul>
    </div>
    <div className={styles.sectionFooter}>
        <RButton type='rSecondary' title='View All' fullWidth/>
        <div>

            <RButton type='rShadow' title='Near You'/>
            <RButton type='rShadow' title='Top'/>
            <RButton type='rShadow' title='Aww'/>
            <RButton type='rShadow' title='Gaming'/>

        </div>
    </div>
</div>;

const RedditPremiumSection = ({dark}) => {
    return <div className={dark ? styles.darkRedditPremium:styles.redditPremium}>
        <div className={styles.redditPremiumContainer}>
            <RedditIcon icon="Reddit-Premium" />
        </div>
        <div className={dark? styles.darkRedditPremiumText:styles.redditPremiumText}>
            <h5>Reddit Premium</h5>
            <span>The best Reddit experience, with monthly Coins</span>
        </div>
        <div>
            <RButton type='TryNow' title='Try Now'/>
        </div>
    </div>
}
const SideSection = ({title, subreddits}) => {
    const {dark} = React.useContext(DarkModeContext);
    return <div>
        <CommunitySection dark={dark} title={title} subreddits={subreddits}/>
        <RedditPremiumSection dark={dark}/>
    </div>
}

export default SideSection;
