import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_ME} from "../graphql/Query";

const useUser = () => {
    const {data} = useQuery(GET_ME);

    if (data) {
        return  data.me;
    }

    return null;
}

export {useUser as default};