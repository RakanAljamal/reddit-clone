import {gql} from '@apollo/client';

const POST_CREATED_SUBSCRIPTION = gql`
    subscription {
        postCreated {
            title
            content
        }
    }
`;

export {POST_CREATED_SUBSCRIPTION};