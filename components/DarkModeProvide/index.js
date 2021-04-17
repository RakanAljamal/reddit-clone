import React, {createContext} from 'react';

const DarkModeContext = createContext({
    darkMode: false,
    toggleDark: () => {
    }
})

const DarkModeProvider = ({children}) => {
    const [dark, setDark] = React.useState(false);
    const toggleDark = (toggleValue) => {
        setDark(toggleValue)
    }

    return <DarkModeContext.Provider value={{dark, toggleDark}}>
        {children}
    </DarkModeContext.Provider>
}

export {DarkModeProvider, DarkModeContext};