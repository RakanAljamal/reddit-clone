import React from 'react';
import styles from './styles.module.scss';
import Navbar from "../Navbar";
import Trending from "../Trending";
import SideSection from "../SideSection/SideSection";
import MainSection from "../MainSection";
import {DarkModeContext} from "../DarkModeProvide";

const HomePage = ({trending, subreddits, posts}) => {
    const {dark, toggleDark} = React.useContext(DarkModeContext);

    console.log('Calling it from HomePage', dark);
    return <React.Fragment>
        <Navbar/>
        <div className={styles.homePage}>
            <Trending title='Trending Today' data={trending}/>

            <div className={styles.mainPageContainer}>
                <MainSection filterTitle='Popular posts' posts={posts}/>
                <SideSection subreddits={subreddits}/>
            </div>
        </div>

    </React.Fragment>
}

export default HomePage;