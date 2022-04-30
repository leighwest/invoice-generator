import React from "react";

import classes from './TextInput.module.css'
// import '../../index.css';

const OptionInput = ({
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
      <select id="state">
          <option value="vic">VIC</option>
          <option value="nsw">NSW</option>
          <option value="nsw">QLD</option>
          <option value="act">ACT</option>
          <option value="sa">SA</option>
          <option value="nt">NT</option>
          <option value="wa">WA</option>
        {/* name={name}
        onChange={handleChange}
        autoComplete="off"
        autoCorrect="off"
        value={value}
        placeholder={`i.e. ${placeholder}`} */}
      </select>
    </div>
  );
};

export default OptionInput;
