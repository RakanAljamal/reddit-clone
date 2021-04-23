import React from 'react';
import styles from './styles.module.scss';
import Navbar from "../Navbar";
import Trending from "../Trending";
import SideSection from "../SideSection/SideSection";
import MainSection from "../MainSection";
import {DarkModeContext} from "../DarkModeProvider";
import {GlobalStyle} from "./styled-component";
import {useQuery} from "@apollo/client";
import {GET_POSTS} from "../../graphql/Query";

const HomePage = ({trending, subreddits, posts}) => {
    const {data,error, loading} = useQuery(GET_POSTS);

    const {dark, toggleDark} = React.useContext(DarkModeContext);
    return !loading && <React.Fragment>
        <GlobalStyle dark={dark}/>
        <Navbar/>
        <div className={styles.homePage}>
            <Trending title='Trending Today' data={trending}/>

            <div className={styles.mainPageContainer}>
                <MainSection filterTitle='Popular posts' posts={data.posts}/>
                <SideSection subreddits={subreddits}/>
            </div>
        </div>

    </React.Fragment>
}

export default HomePage;