import {gql} from '@apollo/client';

const CREATE_POST = gql`
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

export {CREATE_POST,LOGIN}