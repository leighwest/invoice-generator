import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";

import Address from "./Address";
import { cn } from "../../App";
const res = formValidation.get();

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test("renders the address heading", () => {
  act(() => {
    ReactDOM.createRoot(container).render(<Address />);
    render(<Address />, container);
  });
  render(<Address />);
  const headingElement = screen.getByRole("heading", {
    level: 2,
    name: "Address",
  });
  expect(headingElement).toBeInTheDocument();
});
