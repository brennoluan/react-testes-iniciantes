import { render } from "@testing-library/react";
import { TodoContext } from "../TodoProvider/TodoContext.js";
import FormToDo from "./index.jsx";

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
});
