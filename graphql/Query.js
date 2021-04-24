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
            email
            posts{
                title
            }
            name
        }
    }

`;

export {GET_POSTS, GET_TRENDING,GET_ME};
