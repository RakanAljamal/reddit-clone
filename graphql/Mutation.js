import {gql} from '@apollo/client';

const CREATE_POST = gql`
    mutation CreatePost($data:PostCreateInput!) {
        createPost(data:$data){
            title
            content
        }
    }
`;

export {CREATE_POST}