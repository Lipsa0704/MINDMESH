import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

test("counter increment works", () => {
  render(<Counter />);
  
  const countText = screen.getByTestId("count");
  expect(countText).toHaveTextContent("Count: 0");

  const button = screen.getByText("Increment");
  fireEvent.click(button);

  expect(countText).toHaveTextContent("Count: 1");
});
