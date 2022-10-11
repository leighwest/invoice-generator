import styled from 'styled-components';

import TextInput from '../Input/TextInput';
import { InputProps } from './formSectionTypes';

const ServiceInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  padding-bottom: 20px;
  border-bottom: 2px solid var(--color-purple);
`;

const Service = (props: InputProps) => {
  return (
    <div className={'wrapper'}>
      <h2>Service</h2>
      <ServiceInputWrapper>
        <TextInput
          name="description"
          onChange={props.handleChange}
          messages={props.messages['description']}
          placeholder="Interior window clean"
          className={props.cn('description')}
        />
        <TextInput
          name="cost"
          onChange={props.handleChange}
          messages={props.messages['cost']}
          placeholder="210"
          className={'form-element'}
          type="number"
        />
      </ServiceInputWrapper>
    </div>
  );
};

export default Service;
