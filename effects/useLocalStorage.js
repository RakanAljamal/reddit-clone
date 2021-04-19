import React from 'react';

const useLocalStorage = localStorageKey => {

        const [value, setValue] = React.useState(
            typeof window  !== 'undefined' && (localStorage.getItem(localStorageKey)==='true' || false)
        );
    React.useEffect(() => {
        localStorage.setItem(localStorageKey, value);
    }, [value]);


    return [value , setValue];
};


export {useLocalStorage};