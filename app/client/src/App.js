import React, { useState } from 'react';
import Card from './Components/UI/Card';
import Button from './Components/UI/Button';
import Address from './Components/FormSection/Address';
import Date from './Components/FormSection/Date';
// import Input from "./components/Input";
// import Checkbox from "./components/Checkbox";
// import Submit from "./components/Submit";

import classnames from 'vest/classnames';
import formValidation from './Validation/formValidation';
import InvoiceDb from './Util/InvoiceDb';

import classes from './App.module.css';





export default function App() {
  const [formstate, setFormstate] = useState({});

  const res = formValidation.get();

  const cn = classnames(res, {
    invalid: "error",
    valid: "success",
    warning: "warning"
  });

  const handleChange = (currentField, value) => {
    const nextState = { ...formstate, [currentField]: value };
    const result = formValidation(nextState, currentField);
    setFormstate(nextState);
  };




  const handleSubmit = event => {
    event.preventDefault();
    const invoice = {
      address: {
        recipient: formstate.recipient,
        streetAddress: formstate['street-address'],
        suburb: formstate.suburb,
        state: formstate.state,
        postcode: formstate.postcode
      }
    }
    InvoiceDb.createInvoice(invoice).then(
      res => {
        if (res.errorMessage) {
          console.log(`createInvoice returned an error: ${res.errorMessage}`)
        } else {
          console.log(res)
        }
      }
    );
  };

  return (
    <form className={classes.wrapper} onSubmit={handleSubmit}>
      <Card>
        <Address
          handleChange={handleChange}
          messages={res.getErrors()}
          cn={cn}
        />
        <Date />
        {/* <Submit disabled={!res.isValid()} /> */}
        <Button class={"create-invoice-btn"} onClick={handleSubmit} buttonText='generate invoice' />
      </Card>
    </form>
  );
}
