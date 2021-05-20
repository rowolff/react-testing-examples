import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "../Counter";

const onSuccessFn = jest.fn();

test("Clicking button icrements counter", () => {
  render(<Counter onSuccess={onSuccessFn} />);

  const button = screen.getByTitle("incrementor");

  fireEvent.click(button);

  expect(button.textContent).toBe("You clicked me 1 times");
});

test("Clicking button 3 times calls onSuccess", () => {
  render(<Counter onSuccess={onSuccessFn} />);

  const button = screen.getByTitle("incrementor");

  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);

  expect(onSuccessFn).toHaveBeenCalled();
});
