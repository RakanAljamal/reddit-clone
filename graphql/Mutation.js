import {gql} from '@apollo/client';

const POST_MESSAGE=gql`
    mutation  PostMessage($data:PostMessageInput!){
        postMessage(data:$data)
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