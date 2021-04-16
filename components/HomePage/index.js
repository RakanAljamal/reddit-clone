import React from 'react';
import styles from './styles.module.scss';
import Navbar from "../Navbar";
import Trending from "../Trending";

const HomePage = ({trending}) => {
    return <React.Fragment>
        <Navbar/>
        <div className={styles.homePage}>
            <Trending title='Trending Today' data={trending}/>
        </div>

    </React.Fragment>
}

export default HomePage;