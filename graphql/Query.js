import {gql} from '@apollo/client';

const GET_POSTS = gql`{
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
        }
}`


export {GET_POSTS};
