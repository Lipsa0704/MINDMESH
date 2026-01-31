import { render, screen, fireEvent } from "@testing-library/react";
import ToggleMessage from "./ToggleMessage";

describe("ToggleMessage Component", () => {
  test("renders toggle button", () => {
    render(<ToggleMessage />);

    const button = screen.getByText("Toggle Message");
    expect(button).toBeInTheDocument();
  });

  test("shows message after button click", () => {
    render(<ToggleMessage />);

    const button = screen.getByText("Toggle Message");
    fireEvent.click(button);

    const message = screen.getByText(
      "Hello from React Testing Library!"
    );
    expect(message).toBeInTheDocument();
  });

  test("hides message when button is clicked again", () => {
    render(<ToggleMessage />);

    const button = screen.getByText("Toggle Message");

    fireEvent.click(button); // show
    fireEvent.click(button); // hide

    const message = screen.queryByText(
      "Hello from React Testing Library!"
    );
    expect(message).not.toBeInTheDocument();
  });
});
