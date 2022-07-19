import styled from "styled-components";

const StyledDateInputWrapper = styled.div`
  width: 100%;
`

const StyledDateInput = styled.input`
` 

const DateInput = ({
  name,
  label = name
  // onChange,
  // messages = [],
  // value,
  // className,
  // placeholder
}) => {

  return (
    <StyledDateInputWrapper>
      <label htmlFor={name}>
        <strong>{label}</strong>
        {/* {messages.length ? (
          <span className={classes['validation-message']}>{messages[0]}</span>
        ) : null} */}
      </label>
      <StyledDateInput 
        type="date"
      />
    </StyledDateInputWrapper>
  );
}

export default DateInput;