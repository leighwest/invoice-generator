const puppeteer = require('puppeteer');

const invoiceGenerator = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://news.ycombinator.com', {
    waitUntil: 'networkidle2',
  });
  const pdfToSend = await page.pdf({ path: 'hn.pdf', format: 'a4' });

  await browser.close();
  return pdfToSend;
};

module.exports = invoiceGenerator;

