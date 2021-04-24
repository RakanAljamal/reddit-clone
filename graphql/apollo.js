import {ApolloClient, createHttpLink, from, InMemoryCache} from '@apollo/client';
import {WebSocketLink} from '@apollo/client/link/ws';
import {setContext} from "@apollo/client/link/context";

const httpUri = process.env.GRAPHQL_HTTP_URI;

const httpLink = createHttpLink({
    uri: httpUri,
    credentials: 'same-origin'
})
const authLink = setContext((_, {headers}) => {
    const token = localStorage.getItem('token');
    // get the authentication token from local storage if it exists

    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : "",
        }
    }
});


const wsUri = process.env.GRAPHQL_WS_URI;
const link = process.browser && new WebSocketLink({
    uri: wsUri,
    options: {
        reconnect: false
    }
})

const client = new ApolloClient({
    link: from([authLink, httpLink]),
    cache: new InMemoryCache(),
});

export {client as default};