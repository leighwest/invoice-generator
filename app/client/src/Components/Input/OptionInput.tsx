import React from 'react';
import styled from 'styled-components';
import { InputProps } from '../formTypes';

import classes from './TextInput.module.css';

const Select = styled.select`
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid var(--color-content-inactive);
  background: #fbfbfb;
  width: 100%;
  font-size: 0.9em;
  padding: 15px 0;
  outline: none;
  cursor: pointer;
  color: var(--color-success);
`;

const OptionInput = ({
  name,
  label = name,
  onChange,
  messages = [],
  value,
  className,
  placeholder,
}: InputProps): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <div className={classes[className!]}>
      <label htmlFor={name}>
        <strong>{label}</strong>
        {messages.length ? (
          <span className={classes['validation-message']}>{messages[0]}</span>
        ) : null}
      </label>
      <Select
        id="state"
        onChange={handleChange}>
        <option value="vic">VIC</option>
        <option value="nsw">NSW</option>
        <option value="nsw">QLD</option>
        <option value="act">ACT</option>
        <option value="sa">SA</option>
        <option value="nt">NT</option>
        <option value="wa">WA</option>
      </Select>
    </div>
  );
};

export default OptionInput;
