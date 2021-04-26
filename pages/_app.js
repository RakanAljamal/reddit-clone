import '../styles/globals.scss'
import {ApolloProvider} from "@apollo/client/react";
import client from "../graphql/apollo";
import {useLocalStorage} from "../effects/useLocalStorage";
import React, {useState} from "react";
import {DarkModeProvider} from "../components/DarkModeProvider";
import Navbar from "../components/Navbar";
import ChatBox from "../components/Chat";
import {useQuery} from "@apollo/client";
import {GET_MESSAGES} from "../graphql/Query";

function MyApp({Component, pageProps}) {
    const [darkMode] = useLocalStorage('darkModeEnabled');

    return <ApolloProvider client={client}>
        <DarkModeProvider value={darkMode}>
            <Navbar/>
            <Component {...pageProps} />
        </DarkModeProvider>
    </ApolloProvider>
}

export default MyApp
