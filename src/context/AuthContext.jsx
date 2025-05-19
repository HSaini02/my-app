import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const getInitialAuthState = () => {
  const storedAuth = localStorage.getItem('auth');
  if (storedAuth) {
    try {
      const { isLoggedIn, user } = JSON.parse(storedAuth);
      return { isLoggedIn, user };
    } catch (error) {
      console.error("Failed to parse auth from localStorage:", error);
      return { isLoggedIn: false, user: null };
    }
  }
  return { isLoggedIn: false, user: null };
};

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState(getInitialAuthState);

  const login = (userData) => {
    const newState = { isLoggedIn: true, user: userData };
    setAuthState(newState);
    localStorage.setItem('auth', JSON.stringify(newState));
  };

  const logout = () => {
    const newState = { isLoggedIn: false, user: null };
    setAuthState(newState);
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
