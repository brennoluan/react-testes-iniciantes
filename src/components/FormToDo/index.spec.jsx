import { render } from "@testing-library/react";
import { TodoContext } from "../TodoProvider/TodoContext.js";
import FormToDo from "./index.jsx";
import userEvent from "@testing-library/user-event";

describe("FormToDo", () => {
  it("should render the form", () => {
    const { getByRole } = render(
      <TodoContext.Provider value={{ selectedTodo: { description: "anything" } }}>
        <FormToDo onSubmit={() => {}} />
      </TodoContext.Provider>,
    );
    expect(getByRole("form")).toBeInTheDocument();
  });

  it("should render the description of selected todo", () => {
    const { getByRole } = render(
      <TodoContext.Provider value={{ selectedTodo: { description: "anything 2" } }}>
        <FormToDo onSubmit={() => {}} />
      </TodoContext.Provider>,
    );
    expect(getByRole("textbox")).toBeInTheDocument();
    expect(getByRole("textbox")).toHaveValue("anything 2");
  });

  it("should ", async () => {
    const fnSimulateSubmit = jest.fn();

    const { getByRole } = render(
      <TodoContext.Provider value={{ selectedTodo: { description: "anything 2" } }}>
        <FormToDo onSubmit={fnSimulateSubmit} />
      </TodoContext.Provider>,
    );

    const input = getByRole("textbox");
    await userEvent.clear(input);
    await userEvent.type(input, "anything 3");

    const button = getByRole("button", { name: /salvar item/i });
    await userEvent.click(button);

    expect(fnSimulateSubmit).toHaveBeenCalled();
  });
});
