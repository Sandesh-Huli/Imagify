import { createContext, useState } from "react"

export const AppContext = createContext();
const AppContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [authMode, setAuthMode] = useState('Login');
    const [showProfile, setShowProfile] = useState(false);
    const value = {
        user,
        setUser,
        showLogin,
        setShowLogin,
        authMode,
        setAuthMode,
        showProfile,
        setShowProfile,
    };
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
}
export default AppContextProvider;


