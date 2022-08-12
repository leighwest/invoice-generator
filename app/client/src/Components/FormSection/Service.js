import styled from "styled-components";

import TextInput from "../Input/TextInput";

const ServiceInputWrapper = styled.div`
  display: flex;
  /* flex-direction: row; */
  /* justify-content: space-between; */
  /* width: 100%; */
  /* column-gap: 10px; */
`;

const Service = (props) => {
  return (
    <div className={"wrapper"}>
      <h2>Service</h2>
      <ServiceInputWrapper>
        <TextInput
          name="description"
          onChange={props.handleChange}
          messages={props.messages["description"]}
          placeholder="Interior window clean"
          className={props.cn("description")}
        />
        <TextInput
          name="cost"
          onChange={props.handleChange}
          messages={props.messages["cost"]}
          placeholder="210"
          className={"form-element"}
          type="number"
        />
      </ServiceInputWrapper>
    </div>
  );
};

export default Service;
