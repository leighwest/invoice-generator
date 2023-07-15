import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

import { invoiceTemplate } from 'template/invoice';

export const templateService = async (invoiceData: any) => {
  const sheet = new ServerStyleSheet();
  const invoice = React.createElement(invoiceTemplate, invoiceData);
  const html = ReactDOMServer.renderToStaticMarkup(
    sheet.collectStyles(invoice),
  );

  return html;
};
