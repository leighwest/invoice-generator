import React, { useState } from "react";
import TextInput from "./Components/Input/TextInput";
import Card from "./Components/UI/Card";
import Address from "./Components/FormSection/Address";
// import Input from "./components/Input";
// import Checkbox from "./components/Checkbox";
// import Submit from "./components/Submit";

import classnames from "vest/classnames";
import formValidation from "./Validation/formValidation";
// import suite from "./suite";
import classes from './App.module.css';

// this is bad practice:
import './index.css';

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

  return (
    <form className={classes.wrapper} onSubmit={(e) => e.preventDefault()}>
      <Card>
        <Address
          handleChange={handleChange}
          messages={res.getErrors()}
          cn={cn}
        />
        
        {/* <Submit disabled={!res.isValid()} /> */}
      </Card>
    </form>
  );
}
