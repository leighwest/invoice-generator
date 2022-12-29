// let ReactDOMServer = require("react-dom/server");
import ReactDOMServer from "react-dom/server"
import React from "react";

import {invoiceTemplate} from "../template/invoice";



// require("babel-register")({
//   presets: ["react"],
// });




// let ReactDOMServer = require("react-dom/server");

export const templateService = (invoiceData: any) => {
  // const htmlElement = ReactDOMServer.renderToStaticMarkup(element);
  // console.log(invoiceData.address.recipient);
  // console.log(invoiceData.address.streetAddress);
  // console.log(invoiceData.address.suburb);

  const html = ReactDOMServer.renderToString(
    React.createElement(invoiceTemplate, invoiceData)
  );

  return html;
};
