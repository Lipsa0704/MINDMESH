import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("renders counter with initial value", () => {
  render(<Counter />);
  const text = screen.getByText(/count: 0/i);
  expect(text).toBeInTheDocument();
});

test("increments count on button click", () => {
  render(<Counter />);
  const button = screen.getByText(/increment/i);

  fireEvent.click(button);
  fireEvent.click(button);

  const text = screen.getByText(/count: 2/i);
  expect(text).toBeInTheDocument();
});
