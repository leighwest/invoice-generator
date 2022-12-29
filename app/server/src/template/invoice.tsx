import React from "react";
// const template = require("../template/invoice.jsx");

export const invoiceTemplate = (invoiceData: { address: { recipient: string; streetAddress: string; suburb: string; state: string; postcode: string; }; }) => {
  const titleStyle = {
    fontSize: "10rem",
    lineHeight: "1.6",
    color: "red",
  };

  const { recipient, streetAddress, suburb, state, postcode } =
    invoiceData.address;

  // console.log(`recipient is: ${recipient}`);
  // console.log(`street address is: ${streetAddress}`);
  // console.log("before state...");
  // console.log(`state is: ${state}`);

  return (
    <div>
      <link rel="stylesheet" href="./invoice.css" />

      <link rel="stylesheet" type="text/css" href="css/publicInvoice.css" />

      <h1 className="red">{recipient}</h1>
      <h1 style={titleStyle}>{streetAddress}</h1>
      <h1>{streetAddress}</h1>
      <h1>{suburb}</h1>
      <h1>{state}</h1>
      <h1>{postcode}</h1>
    </div>
  );
};