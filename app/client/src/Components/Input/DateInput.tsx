import { useState } from 'react';

import styled from 'styled-components';
import DatePicker from 'react-datepicker';

import { InputProps } from '../formTypes';

import classes from './TextInput.module.css';
import 'react-datepicker/dist/react-datepicker.css';

const StyledDateInputWrapper = styled.div`
  width: 100%;
`;

const StyledDatePicker = styled(DatePicker)`
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

const DateInput = ({
  name,
  label = name,
  onChange,
  messages = [],
  value,
  className,
  placeholder,
}: InputProps) => {
  const handleChange = (date: Date) => {
    setDate(date);
    onChange(name, date.toDateString());
  };

  const [date, setDate] = useState<null | Date>(null);

  return (
    <StyledDateInputWrapper className={classes[className!]}>
      <label htmlFor={name}>
        <strong>{label}</strong>
        {messages.length ? (
          <span className={classes['validation-message']}>{messages[0]}</span>
        ) : null}
      </label>
      <StyledDatePicker
        placeholderText={placeholder}
        dateFormat="dd/MM/yyyy"
        selected={date}
        onChange={handleChange}
      />
    </StyledDateInputWrapper>
  );
};

export default DateInput;
