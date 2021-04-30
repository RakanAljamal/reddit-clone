import '../styles/globals.scss'
import {ApolloProvider} from "@apollo/client/react";
import client from "../graphql/apollo";
import {useLocalStorage} from "../effects/useLocalStorage";
import React from "react";
import {DarkModeProvider} from "../components/DarkModeProvider";
import Navbar from "../components/Navbar";
import {NavbarProvider} from "../components/NavbarProvider";

function MyApp({Component, pageProps}) {
    const [darkMode] = useLocalStorage('darkModeEnabled');

    return <ApolloProvider client={client}>
        <DarkModeProvider value={darkMode}>
            <NavbarProvider>
                <Navbar />
                <Component {...pageProps} />
            </NavbarProvider>
        </DarkModeProvider>
    </ApolloProvider>
}

export default MyApp
