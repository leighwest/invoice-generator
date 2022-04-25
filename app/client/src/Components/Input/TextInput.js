import React from "react";

import classes from './TextInput.module.css'
import '../../index.css';

const TextInput = ({
  name,
  label = name,
  onChange,
  messages = [],
  value,
  className,
  placeholder
}) => {

  const handleChange = e => {
    onChange(name, e.target.value);
  }

  // console.log(`className is ${className}`);

  return (
    <div className={`form-input ${classes[className]}`} > 
      <label htmlFor={name}>
        <strong>{label}</strong>
        {messages.length ? (
          <span className={classes['validation-message']}>{messages[0]}</span>
        ) : null}
      </label>
      <input
        name={name}
        onChange={handleChange}
        autoComplete="off"
        autoCorrect="off"
        value={value}
        placeholder={`i.e. ${placeholder}`}
      />
    </div>
  );
};

export default TextInput;
