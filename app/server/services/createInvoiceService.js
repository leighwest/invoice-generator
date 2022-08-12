const puppeteer = require("puppeteer");

const templateService = require("./templateService");
const template = require("../template/invoice.jsx");
var ReactDOMServer = require("react-dom/server");
const React = require("react");

const invoiceGenerator = async (invoiceData) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const template = templateService(invoiceData);

  await page.setContent(template);

  const pdfToSend = await page.pdf({ path: "hn.pdf", format: "a4" });

  await browser.close();

  return pdfToSend;
};

module.exports = invoiceGenerator;
