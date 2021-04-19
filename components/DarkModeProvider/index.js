import React, {createContext} from 'react';
import {useLocalStorage} from "../../effects/useLocalStorage";

const DarkModeContext = createContext({
    dark: false,
    toggleDark: () => {
    }
})

const DarkModeProvider = ({value,children}) => {
    const [dark, setDark] = React.useState(value);
    const toggleDark = (toggleValue) => {
        console.log(toggleValue)
        setDark(toggleValue)
    }

    return <DarkModeContext.Provider value={{dark, toggleDark}}>
        {children}
    </DarkModeContext.Provider>
}

export {DarkModeProvider, DarkModeContext};