import React, { useState, useCallback } from 'react';

let logoutTimer: NodeJS.Timeout;

type AuthContextType = {
  isLoggedIn: boolean | undefined;
  userId: string | null | undefined;
  token: string | null | undefined;
  login: (userId: string, token: string) => void;
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
  isLoggedIn: undefined,
  userId: null,
  token: '',
  login: (token: string) => {},
  logout: () => {},
});

// const calculateRemainingTime = (expirationTime: string): number => {
//   const currentTime = new Date().getTime();
//   const adjExpirationTime = new Date(expirationTime).getTime();

//   const remainingDuration: number = adjExpirationTime - currentTime;

//   return remainingDuration;
// };

// const retrieveStoredToken = () => {
//   const storedToken = localStorage.getItem('token');
//   const storedExpirationDate = localStorage.getItem('expirationTime');

//   const remainingTime = calculateRemainingTime(storedExpirationDate!);

//   if (remainingTime <= 60000) {
//     localStorage.removeItem('token');
//     localStorage.removeItem('expirationTime');
//     return null;
//   }

//   return {
//     token: storedToken,
//     duration: remainingTime,
//   };
// };

export const AuthContextProvider = (props: Props) => {
  // const tokenData = retrieveStoredToken();
  // const tokenData = { token: '1234', duration: 60 };
  let initialToken = null;
  let initialUserId = null;
  // if (tokenData) {
  //   initialToken = tokenData.token;
  // }
  const [token, setToken] = useState<string | null | undefined>(initialToken);

  const [userId, setUserId] = useState<string | null | undefined>(
    initialUserId,
  );

  console.log(
    `token evaluates to ${token} and !!token evaluates to ${!!token}`,
  );
  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('userData');
    // localStorage.removeItem('token');
    // localStorage.removeItem('expirationTime');

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (
    token: string,
    userId: string,
    // expirationTime: string,
  ) => {
    setToken(token);
    setUserId(userId);
    localStorage.setItem(
      'userData',
      JSON.stringify({ userId: userId, token: token }),
    );
    // localStorage.setItem('token', token);
    // localStorage.setItem('expirationTime', expirationTime);

    // const remainingTime = calculateRemainingTime(expirationTime);
    const remainingTime = 10;

    // logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  // useEffect(() => {
  //   if (tokenData) {
  //     logoutTimer = setTimeout(logoutHandler, tokenData.duration);
  //   }
  // }, [tokenData, logoutHandler]);

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
