import puppeteer from "puppeteer";

import { templateService } from "./templateService";
// const template = require("../template/invoice.jsx");
// const ReactDOMServer = require("react-dom/server");
// const React = require("react");

export const invoiceGenerator = async (invoiceData: any) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const template = templateService(invoiceData);

  await page.setContent(template);

  const pdfToSend = await page.pdf({ path: "hn.pdf", format: "a4" });

  await browser.close();

  return pdfToSend;
};
