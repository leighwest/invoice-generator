import { useState } from "react";
import { createGlobalStyle } from "styled-components"; // applies to entire project

import Card from "./Components/UI/Card";
import Button from "./Components/UI/Button";
import Address from "./Components/FormSection/Address";
import Date from "./Components/FormSection/Date";
import Service from "./Components/FormSection/Service";
// import Input from "./components/Input";
// import Checkbox from "./components/Checkbox";
// import Submit from "./components/Submit";

import classnames from "vest/classnames";
import formValidation from "./Validation/formValidation";
import InvoiceDb from "./Util/InvoiceDb";

import classes from "./App.module.css";

const GlobalStyle = createGlobalStyle`
label {
  display: block;
}

strong {
  text-transform: capitalize;
}
`;

export default function App() {
  const [formstate, setFormstate] = useState({});

  const res = formValidation.get();

  const cn = classnames(res, {
    invalid: "error",
    valid: "success",
    warning: "warning",
  });

  const handleChange = (currentField, value) => {
    const nextState = { ...formstate, [currentField]: value };
    const result = formValidation(nextState, currentField);
    setFormstate(nextState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const invoice = {
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
    console.log("HERE");
    console.log(
      `In App.js state is ${invoice.address.state}, postcode is: ${invoice.address.postcode}`
    );

    InvoiceDb.createInvoice(invoice).then((res) => {
      if (res.errorMessage) {
        console.log(`createInvoice returned an error: ${res.errorMessage}`);
      } else {
        console.log(res);
      }
    });
  };

  return (
    <form className={classes.wrapper} onSubmit={handleSubmit}>
      <Card>
        <GlobalStyle />
        <Address
          handleChange={handleChange}
          messages={res.getErrors()}
          cn={cn}
        />
        <Date handleChange={handleChange} messages={res.getErrors()} cn={cn} />
        <Service
          handleChange={handleChange}
          messages={res.getErrors()}
          cn={cn}
        />
        {/* <Submit disabled={!res.isValid()} /> */}
        <Button
          class={"create-invoice-btn"}
          onClick={handleSubmit}
          buttonText="generate invoice"
        />
      </Card>
    </form>
  );
}
