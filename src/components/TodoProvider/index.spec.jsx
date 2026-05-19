import { TodoProvider } from "./index.jsx";
import { act, render, waitFor } from "@testing-library/react";
import { getTodos } from "../../services/TodoService.js";

jest.mock("../../services/TodoService.js");

describe("TodoProvider", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should render the provider", async () => {
    render(<TodoProvider />);

    act(() => {
      jest.runAllTimers();
    });

    await waitFor(() => expect(getTodos).toHaveBeenCalled());
  });
});
