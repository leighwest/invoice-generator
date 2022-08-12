var ReactDOMServer = require("react-dom/server");
const template = require("../template/invoice.jsx");

require("babel-register")({
  presets: ["react"],
});
var React = require("react");
var ReactDOMServer = require("react-dom/server");

const templateService = (invoiceData) => {
  // const htmlElement = ReactDOMServer.renderToStaticMarkup(element);
  console.log(invoiceData.address.recipient);
  console.log(invoiceData.address.streetAddress);
  console.log(invoiceData.address.suburb);

  var html = ReactDOMServer.renderToString(
    React.createElement(template, invoiceData)
  );

  return html;
};

module.exports = templateService;
