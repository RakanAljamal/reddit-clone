import React from 'react';
import styles from './styles.module.scss';
import Navbar from "../Navbar";
import Trending from "../Trending";
import SideSection from "../SideSection/SideSection";
import MainSection from "../MainSection";
import {DarkModeContext, DarkModeProvider} from "../DarkModeProvider";
import {GlobalStyle} from "./styled-component";
import {useQuery} from "@apollo/client";
import {GET_MESSAGES, GET_POSTS} from "../../graphql/Query";
import ChatBox from "../Chat";
import useUser from "../../effects/useUser";

const HomePage = ({trending, subreddits, posts}) => {
    const {data,error, loading} = useQuery(GET_POSTS);
    const {data:chatData, loading:chatLoading} = useQuery(GET_MESSAGES);
    // console.log(chatData)
    const loggedInUser = useUser();
    const {dark, toggleDark} = React.useContext(DarkModeContext);
    return !loading && <React.Fragment>
        <GlobalStyle dark={dark}/>
        <div className={styles.homePage}>
            <Trending title='Trending Today' data={trending}/>

            <div className={styles.mainPageContainer}>
                {/*<MainSection filterTitle='Popular posts' posts={data.posts}/>*/}
                <SideSection subreddits={subreddits}/>
            </div>
        </div>
        {loggedInUser && !chatLoading && <ChatBox data={chatData}/>}


    </React.Fragment>
}

export default HomePage;