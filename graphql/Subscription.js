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
    subscription MessageAdded($id: ID!){
        messageAdded(otherUserId:$id){
            id
            content
            createdAt
            from {
                id
                name
                email
            }
            to {
                id
                name
                email
            }
        }
    }
`;

const GROUP_MESSAGES = gql`
    subscription {
        messageGroup{
            id
            content
            createdAt
            from{
                id
                name
                email
            }
            to {
                id
                email
                name
            }
        }
    }
`;

export {POST_CREATED_SUBSCRIPTION, MESSAGED_ADDED, GROUP_MESSAGES};
