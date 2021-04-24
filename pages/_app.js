import '../styles/globals.scss'
import {ApolloProvider} from "@apollo/client/react";
import client from "../graphql/apollo";
import {useLocalStorage} from "../effects/useLocalStorage";
import React, {useState} from "react";
import {DarkModeProvider} from "../components/DarkModeProvider";
import Navbar from "../components/Navbar";

function MyApp({Component, pageProps}) {
    const [darkMode] = useLocalStorage('darkModeEnabled');
    const [isMounted, setIsMounted] = useState(false);

    return <ApolloProvider client={client}>
        <DarkModeProvider value={darkMode}>
            <Navbar/>
            <Component {...pageProps} />
        </DarkModeProvider>
    </ApolloProvider>
}

export default MyApp
