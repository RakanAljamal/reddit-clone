import {ApolloClient, from, HttpLink, InMemoryCache, split} from '@apollo/client';
import {WebSocketLink} from '@apollo/client/link/ws';
import {setContext} from "@apollo/client/link/context";
import {SubscriptionClient} from "subscriptions-transport-ws";
import {getMainDefinition} from "@apollo/client/utilities";

const httpUri = 'https://server.aljamal.club/graphql';

const ssrMode = typeof window === 'undefined';

let wsLink;
const wsUri =  'ws://server.aljamal.club/subsriptions';

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
let httpLink = new HttpLink({
    uri: httpUri,
    credentials: 'same-origin',
});
if (!ssrMode) {
    const token = localStorage.getItem('token');
    const wsClient = new SubscriptionClient(
        wsUri, {
            connectionParams:()=>{
                return{
                    Authorization:`Bearer ${token}`
                }
            },
            reconnect: true,
        },


    );
    wsLink = new WebSocketLink(wsClient);
    httpLink = split(
        ({query}) => {
            const definition = getMainDefinition(query);
            return (
                definition.kind === 'OperationDefinition' &&
                definition.operation === 'subscription'
            );
        },
        wsLink,
        httpLink,
    );

}

const client = new ApolloClient({
    ssrMode,
    link: from([authLink, httpLink]),
    cache: new InMemoryCache(),
});

export {client as default};
