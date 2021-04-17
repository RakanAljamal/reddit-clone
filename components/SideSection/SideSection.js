import React from "react";
import styles from './style.module.scss';
import Subreddit from "../Subreddit";
import RButton from '../RButton/index';
import {DarkModeContext} from "../DarkModeProvide";

const SideSection = ({title, subreddits}) => {
    const {dark, toggleDark} = React.useContext(DarkModeContext);

    const handleDarkModeToggle = (e) => {
        console.log('weeeeho', dark);
        toggleDark(dark);
    }

    console.log('Calling it from SideSection component', dark);
    return <div className={styles.topSection}>
        <button onClick={(e) => handleDarkModeToggle(e)}>Click me</button>
        <div className={styles.topBanner}>
            <a className={styles.topBannerText} href="#">Top Programming Communities</a>
        </div>
        <div className={styles.sectionBody}>
            <ul>
                {subreddits.map((subreddit, index) => {
                    return <li className={styles.subredditContainer}><Subreddit {...subreddit} index={index}/></li>
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