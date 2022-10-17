import React, { useState } from 'react';
import { createGlobalStyle, StyledComponent } from 'styled-components'; // applies to entire project
import styled from 'styled-components';

import Card from './Components/UI/Card';
import Button from './Components/UI/Button';
import Address from './Components/FormSection/Address';
import Date from './Components/FormSection/Date';
import Service from './Components/FormSection/Service';

import { Invoice } from './Models/InvoiceModel';

import classnames from 'vest/classnames';
import formValidation from './Validation/formValidation';
import InvoiceDb from './Util/InvoiceDb';
import { SuiteResult } from 'vest';

import AuthForm from 'Components/Auth/AuthForm';

const GlobalStyle = createGlobalStyle`
label {
  display: block;
}

strong {
  text-transform: capitalize;
}
`;

const Wrapper: StyledComponent<'div', any, {}, never> = styled.div`
  background-color: #e3e9ff;
  height: 100vh;
  overflow: auto;
`;

export default function App() {
  const [formstate, setFormstate] = useState<any>({});

  const res: SuiteResult = formValidation.get();

  const cn = classnames(res, {
    invalid: 'error',
    valid: 'success',
    warning: 'warning',
  });

  const handleChange = (currentField: string, value: string): void => {
    const nextState = { ...formstate, [currentField]: value };
    const result = formValidation(nextState, currentField);
    setFormstate(nextState);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const invoice: Invoice = {
      address: {
        recipient: formstate.recipient,
        streetAddress: formstate.streetAddress,
        suburb: formstate.suburb,
        state: formstate.state,
        postcode: formstate.postcode,
      },
      dateIssued: formstate.dateIssued,
      dateDue: formstate.dateDue,
      service: [
        {
          description: formstate.description,
          cost: formstate.cost,
        },
      ],
    };

    InvoiceDb.createInvoice(invoice).then((response: any) => {
      if (response && response!.message) {
        console.error(`createInvoice returned an error: ${response.message}`);
      }
    });
  };

  return (
    // <Wrapper>
    //   <form onSubmit={handleSubmit}>
    //     <Card>
    //       <GlobalStyle />
    //       <Address
    //         handleChange={handleChange}
    //         messages={res.getErrors()}
    //         cn={cn}
    //       />
    //       <Date
    //         handleChange={handleChange}
    //         messages={res.getErrors()}
    //         cn={cn}
    //       />
    //       <Service
    //         handleChange={handleChange}
    //         messages={res.getErrors()}
    //         cn={cn}
    //       />
    //       {/* <Submit disabled={!res.isValid()} /> */}
    //       <Button
    //         // class={'create-invoice-btn'}
    //         onClick={handleSubmit}
    //         buttonText="generate invoice"
    //       />
    //     </Card>
    //   </form>
    // </Wrapper>
    <Wrapper>
      <AuthForm />
    </Wrapper>
  );
}
