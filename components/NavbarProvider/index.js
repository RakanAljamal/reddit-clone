import React, {createContext, useContext, useState} from "react";

const NavbarContext = createContext({
    chatDialog: false,
    toggleChatDialog: () => {

    }
})

const NavbarProvider = ({children}) => {
    const [chatDialog, setChatDialog] = useState(false);
    const toggleChatDialog = () => {
        return setChatDialog(openChat => !openChat);
    }
    return <NavbarContext.Provider value={{chatDialog, toggleChatDialog}}>
        {children}
    </NavbarContext.Provider>
}
const useNavbarOptions = () => useContext(NavbarContext);

export {NavbarProvider, useNavbarOptions};
