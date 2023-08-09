import puppeteer from 'puppeteer';

import { ServerStyleSheet } from 'styled-components';

import { invoiceTemplate } from 'template/invoice';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

export const invoiceGenerator = async (invoiceData: any) => {
  const sheet = new ServerStyleSheet();
  const invoice = React.createElement(invoiceTemplate, invoiceData);
  const html = ReactDOMServer.renderToStaticMarkup(
    sheet.collectStyles(invoice),
  );
  const styleTags = sheet.getStyleTags();

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox'],
  });

  const page = await browser.newPage();

  // Set the page content to the generated HTML and add the extracted CSS styles
  await page.setContent(html);
  await page.addStyleTag({ content: styleTags });

  // Generate a PDF file from the page
  const pdf = await page.pdf({
    path: 'invoice.pdf',
    format: 'A4',
    margin: { left: '1cm', top: '1cm', right: '1cm', bottom: '1cm' },
  });

  await browser.close();

  return pdf;
};
