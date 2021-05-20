import { render, waitFor, screen } from "@testing-library/react";
import App from "./App";
const fetchMock = jest.spyOn(global, "fetch");

test("renders without crashing", async () => {
  fetchMock.mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ title: "mocked" }),
    })
  );

  render(<App />);

  const text = await waitFor(() => screen.getByText("mocked"));
  expect(text).toBeInTheDocument();
});
