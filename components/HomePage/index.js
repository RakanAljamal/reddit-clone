import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss';
import Trending from "../Trending";
import SideSection from "../SideSection/SideSection";
import {DarkModeContext} from "../DarkModeProvider";
import {GlobalStyle} from "./styled-component";
import {useMutation, useQuery, useSubscription} from "@apollo/client";
import {GET_MESSAGES, GET_POSTS} from "../../graphql/Query";
import ChatBox from "../Chat";
import useUser from "../../effects/useUser";
import MainSection from "../MainSection";

const HomePage = ({trending, subreddits, posts}) => {
    const {data:dataPost,loading,error:subError} = useQuery(GET_POSTS);
    if(subError){
        console.log(subError)
    }
    const {data: chatData, loading: chatLoading} = useQuery(GET_MESSAGES);



    // console.log(chatData)
    const loggedInUser = useUser();
    const {dark} = React.useContext(DarkModeContext);
    return !loading && <React.Fragment>
        <GlobalStyle dark={dark}/>
        <div className={styles.homePage}>
            <Trending title='Trending Today' data={trending}/>

            <div className={styles.mainPageContainer}>
                <MainSection filterTitle='Popular posts' posts={dataPost.posts}/>
                <SideSection subreddits={subreddits}/>
            </div>
        </div>
        {loggedInUser && !chatLoading && <ChatBox  data={chatData} />}


    </React.Fragment>
}

export default HomePage;
