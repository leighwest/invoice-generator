import { useState } from "react";

import styled from "styled-components";
import DatePicker from "react-datepicker";


import classes from './TextInput.module.css'
import "react-datepicker/dist/react-datepicker.css";



const StyledDateInputWrapper = styled.div`
  width: 100%;
`

const StyledDateInput = styled.input`

` 

const DateInput = ({
  name,
  label = name,
  onChange,
  messages = [],
  value,
  className,
  placeholder
}) => {

  const handleChange = date => {
    setDate(date)
    onChange(name, date);
  }

  const [date, setDate] = useState(null);

  console.log(messages[0])


  return (
    <StyledDateInputWrapper className={`form-input ${classes[className]}`}>
      <label htmlFor={name}>
        <strong>{label}</strong>
        {messages.length ? (
          <span className={classes['validation-message']}>{messages[0]}</span>
        ) : null}
      </label>
      <DatePicker 
        placeholderText={placeholder}
        dateFormat="dd/MM/yyyy"
        selected={date}
        onChange={handleChange}    
           
        />
    </StyledDateInputWrapper>
  );
}

export default DateInput;