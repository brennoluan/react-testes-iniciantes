import { render } from "@testing-library/react";
import { ToDoCount } from "./index.jsx";
import { getTodos } from "../../services/TodoService.js";

jest.mock("../../services/TodoService.js");

describe("ToDoCount", () => {
  it("should render the count", async () => {
    getTodos.mockResolvedValue([]);

    const { findByText } = render(<ToDoCount />);
    const count = await findByText("0");
    expect(count).toBeInTheDocument();
  });

  it("should render the count with items", async () => {
    getTodos.mockResolvedValue([
      { id: 1, description: "anything", completed: false, createdAt: Date.now() },
      { id: 2, description: "anything", completed: true, createdAt: Date.now() },
    ]);

    const { findByText } = render(<ToDoCount />);
    const count = await findByText("2");
    expect(count).toBeInTheDocument();
  });
});
