import React from 'react';
import styles from './styles.module.scss';
import Navbar from "../Navbar";
import Trending from "../Trending";
import FilterContainer from "../FilterContainer/FilterContainer";
import SideSection from "../SideSection/SideSection";

const HomePage = ({trending, subreddits}) => {
    return <React.Fragment>
        <Navbar/>
        <div className={styles.homePage}>
            <Trending title='Trending Today' data={trending}/>

            <div className={styles.mainPageContainer}>
                <FilterContainer title='Popular posts'/>
                <SideSection subreddits={subreddits}/>
            </div>
        </div>

    </React.Fragment>
}

export default HomePage;