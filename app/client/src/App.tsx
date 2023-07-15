import React, { useState, useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
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
import AuthContext from 'store/auth-context';

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

  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  console.log(`isLoggedIn: ${isLoggedIn}`);

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

  const handleSubmit = async (event: React.FormEvent) => {
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

    await InvoiceDb.createInvoice(invoice, authCtx.token!!).then(
      (response: any) => {
        if (response && response.error) {
          console.error(
            `createInvoice returned an error: ${response.error.message}`,
          );
        }
      },
    );
  };

  return (
    <Wrapper>
      <Routes>
        <Route
          path="/"
          element={
            !isLoggedIn ? (
              <Navigate
                replace
                to="/login"
              />
            ) : (
              <Navigate
                replace
                to="/create-invoice"
              />
            )
          }
        />
        <Route
          index
          path="/login"
          element={
            !isLoggedIn ? (
              <AuthForm />
            ) : (
              <Navigate
                replace
                to="/create-invoice"
              />
            )
          }
        />
        <Route
          path="/create-invoice"
          element={
            isLoggedIn ? (
              <form onSubmit={handleSubmit}>
                <Card>
                  <GlobalStyle />
                  <Address
                    handleChange={handleChange}
                    messages={res.getErrors()}
                    cn={cn}
                  />
                  <Date
                    handleChange={handleChange}
                    messages={res.getErrors()}
                    cn={cn}
                  />
                  <Service
                    handleChange={handleChange}
                    messages={res.getErrors()}
                    cn={cn}
                  />
                  {/* <Submit disabled={!res.isValid()} /> */}
                  <Button
                    // class={'create-invoice-btn'}
                    onClick={handleSubmit}
                    buttonText="generate invoice"
                  />
                </Card>
              </form>
            ) : (
              <Navigate
                replace
                to="/"
              />
            )
          }
        />
        <Route
          path="*"
          element={
            <Navigate
              replace
              to="/login"
            />
          }
        />
      </Routes>
    </Wrapper>
  );
}
