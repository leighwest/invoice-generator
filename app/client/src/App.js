import React, { useState } from "react";
import Card from "./Components/UI/Card";
import Button from "./Components/UI/Button";
import Address from "./Components/FormSection/Address";
// import Input from "./components/Input";
// import Checkbox from "./components/Checkbox";
// import Submit from "./components/Submit";

import classnames from "vest/classnames";
import formValidation from "./Validation/formValidation";
import InvoiceDb from "./Util/InvoiceDb";

import classes from './App.module.css';

// this is bad practice:
// import './index.css';

export default function App() {
  const [formstate, setFormstate] = useState({});
  // const [usernamePending, setUsernamePending] = useState(false);

  const handleChange = (currentField, value) => {
    const nextState = { ...formstate, [currentField]: value };
    const result = formValidation(nextState, currentField);
    setFormstate(nextState);

    // if (currentField === "username") {
    //   setUsernamePending(true);
    // }

    // result.done((res) => {
    //   setUsernamePending(false);
    // });
  };

  const res = formValidation.get();

  const cn = classnames(res, {
    invalid: "error",
    valid: "success",
    warning: "warning"
  });

  const handleSubmit = event => {
    event.preventDefault();
    // if validate(todoDescription)
    const invoice = {
      recipient: formstate.recipient,
      // streetAddress: formstate.street-address
      // date: new Date(),
      // completed: false
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
    // props.deleteDraftTodo();
  };

  return (
    <form className={classes.wrapper} onSubmit={handleSubmit}>
      <Card>
        <Address
          handleChange={handleChange}
          messages={res.getErrors()}
          cn={cn}
        />
        
        {/* <Submit disabled={!res.isValid()} /> */}
        <Button class={"create-invoice-btn"} onClick={handleSubmit} buttonText='generate invoice'/>
      </Card>
    </form>
  );
}
