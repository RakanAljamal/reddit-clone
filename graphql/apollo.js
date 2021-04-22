import {ApolloClient, InMemoryCache} from '@apollo/client';
import {WebSocketLink} from '@apollo/client/link/ws';


const wsUri = process.env.GRAPHQL_WS_URI;
const link = process.browser && new WebSocketLink({
    uri: wsUri,
    options: {
        reconnect: false
    }
})

const httpUri = process.env.GRAPHQL_HTTP_URI;
const client = new ApolloClient({
    link,
    uri: httpUri,
    cache: new InMemoryCache()
});

export {client as default};