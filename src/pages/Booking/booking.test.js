import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Booking from "./Booking";

test("renders booking form", () => {
  render(<Booking />);
  const bookConsult = screen.getByText("Book a Consult");
  const submitButton = screen.getByText("Submit");

  expect(bookConsult).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("booking form are clickable", async () => {
  const user = userEvent.setup();

  render(<Booking />);
  const phoneInput = screen.getByLabelText("Phone Number:");
  const instrumentTypeSelect = screen.getByLabelText("Instrument Type:");
  const questionTextarea = screen.getByLabelText("Your Question or Message:");

  expect(phoneInput).toBeInTheDocument();
  expect(instrumentTypeSelect).toBeInTheDocument();
  expect(questionTextarea).toBeInTheDocument();

  await user.type(phoneInput, "+380633333333");
  await user.selectOptions(instrumentTypeSelect, "piano");
  await user.type(questionTextarea, "Test question");

  expect(phoneInput).toHaveValue("+380633333333");
  expect(instrumentTypeSelect).toHaveValue("piano");
  expect(questionTextarea).toHaveValue("Test question");
});
