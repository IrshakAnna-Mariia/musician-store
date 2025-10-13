import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders musician instruments", () => {
  render(<Home />);
  const pianoCard = screen.getByText("Digital Piano");
  const ukuleleCard = screen.getByText("Ukulele");
  const bassGuitarCard = screen.getByText(
    "4-string electric bass with solid low-end performance."
  );
  const saxophone = screen.getByText("Saxophone");

  expect(pianoCard).toBeInTheDocument();
  expect(ukuleleCard).toBeInTheDocument();
  expect(bassGuitarCard).toBeInTheDocument();
  expect(saxophone).toBeInTheDocument();
});
