import React, { useContext } from 'react';
import { IUser } from '../../types/user';

const UserContext = React.createContext<{ user?: IUser }>(null);

export const useUser = () => {
    const ctx = useContext(UserContext);
    return ctx;
};

export const UserProvider = UserContext.Provider;