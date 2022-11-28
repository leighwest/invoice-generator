import React, { useState } from 'react';

type AuthContextType = {
  token: string | null;
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
};

// This is the preferred method
type Props = {
  children: JSX.Element | JSX.Element[];
};

// This is the initial state of our context, we provide the initial values
// but still have to specify the expected types using AuthContextType
// i.e. although token is initially an empty string it can also be null, which is important because
// token is initialised as null in useState (below)
const AuthContext = React.createContext<AuthContextType>({
  token: '',
  isLoggedIn: false,
  login: (token: string) => {},
  logout: () => {},
});

export const AuthContextProvider = (props: Props) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState<string | null>(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token: string) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
