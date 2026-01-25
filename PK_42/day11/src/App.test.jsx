import "@testing-library/jest-dom";              // ✅ ADD THIS
import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";

test("renders initial count", () => {
  render(<App />);
  const countText = screen.getByTestId("count");
  expect(countText).toHaveTextContent("Count: 0");
});

test("increments count on button click", () => {
  render(<App />);
  const button = screen.getByText("Increase");
  fireEvent.click(button);
  const countText = screen.getByTestId("count");
  expect(countText).toHaveTextContent("Count: 1");
});
