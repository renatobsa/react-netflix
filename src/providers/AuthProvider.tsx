import React, { createContext, useState } from 'react';

interface AuthContextData{
    signed:boolean,
    userScreen:any|null,
    setUserScreen(userData):void
};


export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = (props) =>{
    const [userScreen, setUserScreen] = useState<any|null>(null);
    
    const handleSetUser = (userData)=>{
        setUserScreen(userData)
    }
    
    return (
        <AuthContext.Provider value={{userScreen, setUserScreen:handleSetUser,signed:!!userScreen} }>
         {props.children}
        </AuthContext.Provider>
    )
};
export const useAuth = () => React.useContext(AuthContext);
