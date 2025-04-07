import React, { createContext, useState, useEffect } from 'react';
import { User } from '../models/user';
import { login, logout, getStoredUser, currentUser } from '../services/auth';

interface AuthContextProps {
  user: User | null;
  loginUser: (email: string, password: string) => Promise<void>;
  logoutUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);


  const loginUser = async (email: string, password: string) => {  
    const logenToken = await login(email, password);
    if (!logenToken) {
      throw new Error("Token non reçu après la connexion");
    }

    const loggedUser = await currentUser();
    setUser(loggedUser);
    setToken(logenToken ?? null);
  };

  const logoutUser = async () => {
    await logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
