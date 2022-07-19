import React from "react";

import classes from './TextInput.module.css'

const TextInput = ({
  name,
  label = name,
  onChange,
  messages = [],
  value,
  className,
  placeholder
}) => {

  const { cn, bottomRow } = className;

  const handleChange = e => {
    onChange(name, e.target.value);
  }
  
  return (
    <div className={(Object.keys(className).length === 2) ? (`form-input ${classes[cn]} ${classes[bottomRow]}`) : (`form-input ${classes[className]}`) }> 
      <label htmlFor={name}>
        <strong>{label.replace(/-/g, ' ')}</strong>
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
