import {gql} from '@apollo/client';

const POST_MESSAGE=gql`
    mutation  PostMessage($data:PostMessageInput!,$showAllMessages: Boolean){
        postMessage(data:$data,showAllMessages:$showAllMessages){
            id
            content
            from{
                id
            }
            to{
                id
            }
        }
    }

`;const CREATE_POST = gql`
    mutation CreatePost($data:PostCreateInput!) {
        createPost(data:$data){
            title
            content
        }
    }
`;

const LOGIN = gql`
    mutation Login($data:Login!){
        login(data:$data){
            token
        }
    }
`;

export {CREATE_POST,LOGIN,POST_MESSAGE}
