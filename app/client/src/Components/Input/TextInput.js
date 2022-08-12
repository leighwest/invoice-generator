import React from "react";
import styled from "styled-components";

import classes from "./TextInput.module.css";

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
}) => {
  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <div className={className}>
      <label htmlFor={name}>
        <strong>{label.replace(/-/g, " ")}</strong>
        {messages.length ? (
          <span className={classes["validation-message"]}>{messages[0]}</span>
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
    </div>
  );
};

export default TextInput;
