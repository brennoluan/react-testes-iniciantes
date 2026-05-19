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
});
