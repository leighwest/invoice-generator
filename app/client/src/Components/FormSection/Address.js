import styled from "styled-components";

import TextInput from "../Input/TextInput";
import OptionInput from "../Input/OptionInput";

const AddressSectionWrapper = styled.div`
  padding-bottom: 20px;
  border-bottom: 2px solid var(--color-purple);
`;

const BottomRowWrapper = styled.div`
  display: flex;
  column-gap: 10px;
`;

const Address = (props) => {
  return (
    <AddressSectionWrapper>
      <h2>Address</h2>
      <TextInput
        name="recipient"
        onChange={props.handleChange}
        messages={props.messages["recipient"]}
        placeholder="Mr Tim Jones"
        className={props.cn("recipient")}
      />
      <TextInput
        name="streetAddress"
        label="street address"
        onChange={props.handleChange}
        messages={props.messages["streetAddress"]}
        placeholder="57 Ford Street"
        className={props.cn("streetAddress")}
      />
      <BottomRowWrapper>
        <TextInput
          name="suburb"
          onChange={props.handleChange}
          messages={props.messages["suburb"]}
          placeholder="Ivanhoe"
          className={props.cn("suburb")}
        />
        <OptionInput name="state" onChange={props.handleChange} />
        <TextInput
          name="postcode"
          onChange={props.handleChange}
          messages={props.messages["postcode"]}
          placeholder="3079"
          className={props.cn("postcode")}
        />
      </BottomRowWrapper>
    </AddressSectionWrapper>
  );
};

export default Address;
