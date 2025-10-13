import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders musician store", () => {
  render(<App />);
  const navItem = screen.getByText(/About/i);
  const pianoCard = screen.getByText("Digital Piano");

  expect(navItem).toBeInTheDocument();
  expect(pianoCard).toBeInTheDocument();
});
