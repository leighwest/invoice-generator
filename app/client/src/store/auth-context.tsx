import React, { useState, useCallback } from 'react';
import jwtDecode from 'jwt-decode';

let logoutTimer: NodeJS.Timeout;

type AuthContextType = {
  isLoggedIn: boolean | undefined;
  userId: string | null | undefined;
  token: string | null | undefined;
  login: (token: string) => void;
  logout: () => void;
};

type AuthToken = {
  userId: string;
  email: string;
  iat: number;
  exp: number;
};

type Props = {
  children: JSX.Element | JSX.Element[];
};

// This is the initial state of our context, we provide the initial values
// but still have to specify the expected types using AuthContextType
// i.e. although token is initially an empty string it can also be null, which is important because
// token is initialised as null in useState (below)
const AuthContext = React.createContext<AuthContextType>({
  isLoggedIn: undefined,
  userId: null,
  token: '',
  login: (token: string) => {},
  logout: () => {},
});

const retrieveStoredToken = (): string | null => {
  const storedUserData = JSON.parse(localStorage.getItem('userData')!!);

  if (storedUserData) {
    const decodedToken: AuthToken = jwtDecode(storedUserData.token);

    const storedExpirationDate = decodedToken.exp;

    // log the user out if there is less than 60 seconds left on token expiry
    if (storedExpirationDate - Math.floor(Date.now()) / 1000 <= 60) {
      localStorage.removeItem('userData');
      return null;
    }
    return storedUserData.token;
  }
  return null;
};

export const AuthContextProvider = (props: Props) => {
  const storedToken = retrieveStoredToken();
  let initialToken = null;
  let initialUserId = null;
  if (storedToken) {
    initialToken = storedToken;
  }
  const [token, setToken] = useState<string | null | undefined>(initialToken);

  const [userId, setUserId] = useState<string | null | undefined>(
    initialUserId,
  );

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('userData');

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token: string) => {
    const decodedToken: AuthToken = jwtDecode(token);

    setToken(token);
    setUserId(decodedToken.userId);
    localStorage.setItem(
      'userData',
      JSON.stringify({ userId: userId, token: token }),
    );
  };

  const contextValue = {
    isLoggedIn: userIsLoggedIn,
    userId: userId,
    token: token,
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
