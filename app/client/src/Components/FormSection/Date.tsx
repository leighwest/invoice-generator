import styled from 'styled-components';
import { InputProps } from './formSectionTypes';

import DateInput from '../Input/DateInput';

const DateInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  padding-bottom: 20px;
  border-bottom: 2px solid var(--color-purple);
`;

const Date = (props: InputProps) => {
  return (
    <>
      <h2>Date</h2>
      <DateInputWrapper>
        <DateInput
          name="dateIssued"
          label="date issued"
          onChange={props.handleChange}
          messages={props.messages['dateIssued']}
          placeholder="Enter date issued"
          className={props.cn('dateIssued')}
        />
        <DateInput
          name="dateDue"
          label="date due"
          onChange={props.handleChange}
          messages={props.messages['dateDue']}
          placeholder="Enter date due"
          className={props.cn('dateDue')}
        />
      </DateInputWrapper>
    </>
  );
};

export default Date;
