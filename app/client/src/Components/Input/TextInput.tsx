import styled from 'styled-components';

import classes from './TextInput.module.css';
import React from 'react';
import { InputProps } from '../formTypes';

const StyledTextInputWrapper = styled.div`
  width: 100%;
`;

const Input = styled.input`
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid var(--color-content-inactive);
  background: #fbfbfb;
  width: 100%;
  font-size: 0.9em;
  padding: 1em 1em;
  outline: none;
  transition: 0.2s;
  color: var(--color-content-active);
`;

const TextInput = ({
  name,
  label = name,
  onChange,
  messages = [],
  value,
  className,
  placeholder,
  type,
}: InputProps): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <StyledTextInputWrapper className={classes[className]}>
      <label htmlFor={name}>
        <strong>{label.replace(/-/g, ' ')}</strong>
        {messages.length ? (
          <span className={classes['validation-message']}>{messages[0]}</span>
        ) : null}
      </label>
      <Input
        name={name}
        onChange={handleChange}
        autoComplete="off"
        autoCorrect="off"
        value={value}
        placeholder={`i.e. ${placeholder}`}
        type={type}
      />
    </StyledTextInputWrapper>
  );
};

export default TextInput;
