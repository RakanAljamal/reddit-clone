import {gql} from '@apollo/client';

const POST_CREATED_SUBSCRIPTION = gql`
    subscription {
        postCreated {
            title
            content
        }
    }
`;

const MESSAGED_ADDED = gql`
    subscription{
        postMessage{
            content
            createdAt
        }
    }
`;

export {POST_CREATED_SUBSCRIPTION};