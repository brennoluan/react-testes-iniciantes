import { ToDoItem } from "./index.jsx";
import { TodoContext } from "../TodoProvider/TodoContext.js";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ToDoItem", () => {
  it("should render the item correctly", () => {
    const item = {
      description: "anything",
      createdAt: new Date(),
      completed: false,
    };

    const { getByText, getByRole } = render(
      <TodoContext.Provider value={{}}>
        <ToDoItem item={item} />
      </TodoContext.Provider>,
    );

    expect(getByText(item.description)).toBeInTheDocument();
    expect(getByText(item.createdAt.toLocaleDateString("pt-BR"))).toBeInTheDocument();
    expect(getByRole("checkbox")).not.toBeChecked();
  });

  it("should call function selectTodoForEdit when the edit button is clicked", async () => {
    const fnSelectTodoForEdit = jest.fn();

    const item = {
      description: "edit anything",
      createdAt: new Date(),
      completed: false,
    };

    const { getByRole } = render(
      <TodoContext.Provider value={{ selectTodoForEdit: fnSelectTodoForEdit }}>
        <ToDoItem item={item} />
      </TodoContext.Provider>,
    );
    const button = getByRole("button", { name: /edit/i });
    await userEvent.click(button);

    expect(fnSelectTodoForEdit).toHaveBeenCalledWith(item);
  });
});
