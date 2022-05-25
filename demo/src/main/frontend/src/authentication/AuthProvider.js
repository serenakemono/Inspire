import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';

export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState({});

    useEffect(() => {
        const currUser = {};
        setUser(currUser);
    }, [])

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

