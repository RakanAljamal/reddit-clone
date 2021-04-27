import {gql} from '@apollo/client';

const GET_POSTS = gql`
    query {
        posts{
            title
            content
            author {
                name
            }
            subreddit {
                name
                logo
            }
            type
        }
    }
`;

const GET_TRENDING = gql`
    query {
        trending{
            title
            description
            image
        }
    }
`;

const GET_ME = gql`
    query {
        me {
            id
            email
            posts{
                title
            }
            name
        }
    }`;

const GET_MESSAGES = gql`
    query GET_MESSAGES($id:ID){
        messages(findById: $id) {
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

export {GET_POSTS, GET_TRENDING, GET_ME, GET_MESSAGES};
