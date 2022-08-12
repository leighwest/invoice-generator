import styled from "styled-components";

import DateInput from "../Input/DateInput";

const DateInputSectionWrapper = styled.div`
  padding-bottom: 20px;
  border-bottom: 2px solid var(--color-purple);
`;

const DateInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 10px;
`;

const Date = (props) => {
  return (
    <DateInputSectionWrapper>
      <h2>Date</h2>
      <DateInputWrapper>
        <DateInput
          name="dateIssued"
          label="date issued"
          onChange={props.handleChange}
          messages={props.messages["dateIssued"]}
          placeholder="Enter date issued"
          className={props.cn("dateIssued")}
        />
        <DateInput name="date due" />
      </DateInputWrapper>
    </DateInputSectionWrapper>
  );
};

export default Date;
