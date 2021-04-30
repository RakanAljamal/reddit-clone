import React, {useMemo} from 'react';
import {useQuery} from "@apollo/client";
import {GET_ME} from "../graphql/Query";

const useUser = () => {
    const {data} = useQuery(GET_ME);
    return useMemo(() => data?.me, [data]);
}

export {useUser as default};
