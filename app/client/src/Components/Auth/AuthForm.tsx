import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  margin: 3rem auto;
  width: 95%;
  max-width: 25rem;
  border-radius: 6px;
  background-color: #38015c;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  text-align: center;

  h1 {
    text-align: center;
    color: white;
  }
`;

const InputDiv = styled.div`
  margin-bottom: 0.5rem;
  label {
    display: block;
    color: white;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input {
    font: inherit;
    background-color: #f1e1fc;
    color: #38015c;
    border-radius: 4px;
    border: 1px solid white;
    width: 100%;
    text-align: left;
    padding: 0.25rem;
  }
`;

const ActionDiv = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    cursor: pointer;
    font: inherit;
    color: white;
    background-color: #9f5ccc;
    border: 1px solid #9f5ccc;
    border-radius: 4px;
    padding: 0.5rem 2.5rem;
  }

  button:hover {
    background-color: #873abb;
    border-color: #873abb;
  }
`;

const ToggleButton = styled.button`
  margin-top: 1rem;
  background-color: transparent;
  color: #9f5ccc;
  border: none;
  padding: 0.15rem 1.5rem;
  font: inherit;

  :hover {
    background-color: transparent;
    color: #ae82cc;
    cursor: pointer;
  }
`;

export const passwordValidator = (
  password: string,
  password2: string,
): string => {
  let response = '';
  console.log(password, password2);

  if (password !== password2) {
    response = 'Entered passwords do not match. Please try again.';
  }

  return response;
};

const AuthForm = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const passwordReEnterInputRef = useRef<HTMLInputElement>(null);

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((current) => !current);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredEmail: string = emailInputRef.current!.value;
    const enteredPassword = passwordInputRef.current!.value;
    const reEnteredPassword = passwordReEnterInputRef.current!.value;

    const passwordValidationMessage = passwordValidator(
      enteredPassword,
      reEnteredPassword,
    );

    if (passwordValidationMessage) {
      // display modal with message
      console.log(passwordValidationMessage);
      return;
    }

    const URL: string = process.env.REACT_APP_NEW_USER_URL!;

    if (isLogin) {
    } else {
      console.log('button clicked');
      fetch(URL, {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        if (res.ok) {
          // handle success
          console.log('success');
        } else {
          return res.json().then((data) => {
            // show an error modal
            console.log(data);
          });
        }
      });
    }
  };

  return (
    <StyledSection>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <InputDiv>
          <label htmlFor="email">Enter Email</label>
          <input
            type="email"
            id="email"
            ref={emailInputRef}
            required
          />
        </InputDiv>
        <InputDiv>
          <label htmlFor="password">Enter Password</label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
            required
          />
        </InputDiv>
        {!isLogin && (
          <InputDiv>
            <label htmlFor="password">Re-enter Password</label>
            <input
              type="password"
              id="reEnterPassword"
              ref={passwordReEnterInputRef}
              required
            />
          </InputDiv>
        )}
        <ActionDiv>
          <button
            // onClick={submitHandler}

            type="submit">
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </ActionDiv>
        <ToggleButton
          onClick={switchAuthModeHandler}
          type="button">
          {isLogin ? 'Create new account' : 'Login with existing account'}
        </ToggleButton>
      </form>
    </StyledSection>
  );
};

export default AuthForm;
