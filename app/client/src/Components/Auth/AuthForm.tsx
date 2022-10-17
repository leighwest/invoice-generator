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

const AuthForm = () => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const passwordReEnterInputRef = useRef(null);

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((current) => !current);
  };

  return (
    <StyledSection>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form>
        <InputDiv>
          <label htmlFor="email">Enter Email</label>
          <input
            type="email"
            id="email"
            ref={emailInputRef}
          />
        </InputDiv>
        <InputDiv>
          <label htmlFor="password">Enter Password</label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
          />
        </InputDiv>
        {isLogin && (
          <InputDiv>
            <label htmlFor="password">Re-enter Password</label>
            <input
              type="password"
              id="reEnterPassword"
              ref={passwordReEnterInputRef}
            />
          </InputDiv>
        )}
        <ActionDiv>
          <button onClick={() => console.log('clicked')}>
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
