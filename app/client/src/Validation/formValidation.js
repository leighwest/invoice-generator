import { create, test, enforce, only, warn } from "vest";

const formValidation = create((data = {}, currentField) => {
  only(currentField);

  test("recipient", "Recipient is required", () => {
    enforce(data.recipient).isNotEmpty();
  });
  test("recipient", "Recipient is too short", () => {
    enforce(data.recipient).longerThan(2);
  });

  test("streetAddress", "Street address is required", () => {
    enforce(data.streetAddress).isNotEmpty();
  });

  test("suburb", "Suburb is required", () => {
    enforce(data.suburb).isNotEmpty();
  });

  test("state", "State is required", () => {
    enforce(data.state).isNotEmpty();
  });

  test("postcode", "Postcode is required", () => {
    enforce(data.postcode).isNotEmpty();
  });

  test("dateIssued", "Date must not be empty", () => {
    console.log(data["dateIssued"].toString());
    enforce(data["dateIssued"].toString()).isNotEmpty();
  });

  test("dateIssued", "Date issued more than 1 year ago", () => {
    const dateIssued = new Date(data.dateIssued);
    const todayDate = new Date();

    enforce(
      dateIssued.getTime() >= todayDate.getTime() - 31536000730
    ).isTruthy();
  });
});

export default formValidation;
