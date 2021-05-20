import { render, screen, waitFor } from "@testing-library/react";
import Title from "../Title";
import { getTitle } from "../../api";

jest.mock("../../api", () => {
  return { getTitle: jest.fn() };
});

test("Renders loading, then the title", async () => {
  getTitle.mockReturnValue(["mocked title", null]);

  render(<Title />);

  const text = screen.getByText("Loading ...");

  expect(text).toBeInTheDocument();

  const title = await waitFor(() => screen.getByText("mocked title"));

  expect(title).toBeInTheDocument();
});

test("Renders horrible error if something goes wrong", async () => {
  getTitle.mockReturnValue([null, new Error("baem")]);

  render(<Title />);

  const text = screen.getByText("Loading ...");

  expect(text).toBeInTheDocument();

  const title = await waitFor(() =>
    screen.getByText("There was a horrible error")
  );

  expect(title).toBeInTheDocument();
  expect(getTitle).toHaveBeenCalledTimes(1);
});
