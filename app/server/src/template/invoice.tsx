import React from 'react';
import styled from 'styled-components';
import { readFileSync } from 'fs';

import { IInvoiceData } from 'models/invoice';

const Wrapper = styled.div`
  padding: 40px;
`;

const SubHeading = styled.h3`
  color: #7182ff;
  font-weight: normal;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CompanyDetails = styled.div`
  text-align: right;
`;

const InvoiceDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  padding-bottom: 60px;
  border-bottom: solid 3px #7182ff;
`;

const ClientDetails = styled.div`
  width: 50%;
`;

const DateSection = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
`;

const InvoiceNumberSection = styled.div`
  width: 21%;
  display: flex;
  flex-direction: column;
`;

const AmountDueSection = styled.div`
  width: 20%;
  text-align: right;
  display: flex;
  flex-direction: column;
`;

const LineItemWrapper = styled.div`
  margin-top: 20px;
`;

const LineItemHeader = styled.div`
  display: flex;
  color: #7182ff;
  text-transform: uppercase;
`;

const LineItem = styled.div`
  display: flex;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: solid 1px #ccc;
`;

const LineItemDescription = styled.div`
  flex: 0 0 44%;
`;

const LineItemRate = styled.div`
  flex: 1.5;
  text-align: right;
`;

const LineItemQty = styled.div`
  flex: 1;
  text-align: right;
`;

const LineItemAmount = styled.div`
  flex: 1;
  text-align: right;
`;

const TotalsWrapper = styled.div`
  margin-left: 45%;
`;

const TotalsSection = styled.div`
  border-bottom: solid 1px #ccc;
`;

const TotalsRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FreeTextSection = styled.div`
  margin-top: 50px;
`;

const logoPath = 'src/public/images/logo.png';
const logoBase64 = readFileSync(logoPath).toString('base64');
const logoSrc = `data:image/png;base64,${logoBase64}`;

export const calcSubtotal = (service: { cost: number }[]): number => {
  return service.reduce((acc, curr) => +acc + +curr.cost, 0);
};

export const invoiceTemplate = (invoiceData: IInvoiceData) => {
  const { recipient, streetAddress, suburb, state, postcode } =
    invoiceData.address;

  const subTotal = calcSubtotal(invoiceData.service);
  console.log(subTotal);

  return (
    <Wrapper>
      <Header>
        <img
          // this works:
          // src="https://i.imgur.com/0pQKUnQ.png"

          src={logoSrc}
          alt="logo"
          width={200}
        />
        <CompanyDetails>
          YOUR COMPANY <br />
          16 Somers St <br />
          Burwood, VIC <br />
          3125 <br />
          Australia <br />
          ABN 50 110 219 460
        </CompanyDetails>
      </Header>
      <InvoiceDetailsWrapper>
        <ClientDetails>
          <SubHeading>Billed To</SubHeading>
          {recipient} <br />
          {streetAddress} <br />
          {suburb}, {state} <br />
          {postcode}
        </ClientDetails>
        <DateSection>
          <SubHeading>Date Issued</SubHeading>
          {invoiceData.dateIssued}
          <SubHeading>Date Due</SubHeading>
          {invoiceData.dateDue}
        </DateSection>
        <InvoiceNumberSection>
          <SubHeading>Invoice Number</SubHeading>
          INV-10012
        </InvoiceNumberSection>
        <AmountDueSection>
          <SubHeading>Amount Due</SubHeading>
          $1699.48
        </AmountDueSection>
      </InvoiceDetailsWrapper>
      <LineItemWrapper>
        <LineItemHeader>
          <LineItemDescription>Description</LineItemDescription>
          <LineItemRate>Rate</LineItemRate>
          <LineItemQty>Qty</LineItemQty>
          <LineItemAmount>Amount</LineItemAmount>
        </LineItemHeader>
        {invoiceData.service.map((service, index) => {
          return (
            <LineItem key={index}>
              <LineItemDescription>{service.description}</LineItemDescription>

              <LineItemAmount>{service.cost}</LineItemAmount>
            </LineItem>
          );
        })}
      </LineItemWrapper>
      <TotalsWrapper>
        <TotalsSection>
          <TotalsRow>
            <p>Subtotal</p>
            <p>{subTotal}</p>
          </TotalsRow>
          <TotalsRow>
            <p>GST</p>
            <p style={{ marginRight: '110px' }}>10%</p>
            <p>$12.00</p>
          </TotalsRow>
        </TotalsSection>
        <TotalsSection>
          <TotalsRow>
            <p>Total</p>
            <p> $132.00</p>
          </TotalsRow>
        </TotalsSection>
        <TotalsSection>
          <TotalsRow>
            <p>Amount Due</p>
            <p> $132.00</p>
          </TotalsRow>
        </TotalsSection>
      </TotalsWrapper>
      <FreeTextSection>
        <SubHeading>Notes</SubHeading>
        <p>Kindly include your payment reference if paying electronically.</p>
        <p>Thank you for your business.</p>
      </FreeTextSection>
      <FreeTextSection>
        <SubHeading>Terms</SubHeading>
        <p>Payment due within 7 days</p>
      </FreeTextSection>
    </Wrapper>
  );
};
