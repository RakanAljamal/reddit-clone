import React from 'react';
import styles from './styles.module.scss';
import Navbar from "../Navbar";
import Trending from "../Trending";
import SideSection from "../SideSection/SideSection";
import MainSection from "../MainSection";
import {DarkModeContext} from "../DarkModeProvider";
import Home from "../../pages";
import {GlobalStyle, HomeStyled} from "./styled-component";

const HomePage = ({trending, subreddits, posts}) => {
    const {dark, toggleDark} = React.useContext(DarkModeContext);
    return <React.Fragment>
        <GlobalStyle dark={dark}/>
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