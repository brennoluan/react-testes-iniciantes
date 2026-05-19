import FormToDo from "./index.jsx";
import userEvent from "@testing-library/user-event";
import customRender from "../../helpers/customRender.jsx";

describe("FormToDo", () => {
  it("should render the form", () => {
    const { getByRole } = customRender(<FormToDo onSubmit={() => {}} />, {
      selectedTodo: { description: "anything" },
    });
    expect(getByRole("form")).toBeInTheDocument();
  });

  it("should render the description of selected todo", () => {
    const { getByRole } = customRender(<FormToDo onSubmit={() => {}} />, {
      selectedTodo: { description: "anything 2" },
    });

    expect(getByRole("textbox")).toBeInTheDocument();
    expect(getByRole("textbox")).toHaveValue("anything 2");
  });

  it("should ", async () => {
    const fnSimulateSubmit = jest.fn();

    const { getByRole } = customRender(<FormToDo onSubmit={fnSimulateSubmit} />, {
      selectedTodo: { description: "anything 2" },
    });

    const input = getByRole("textbox");
    await userEvent.clear(input);
    await userEvent.type(input, "anything 3");

    const button = getByRole("button", { name: /salvar item/i });
    await userEvent.click(button);

    expect(fnSimulateSubmit).toHaveBeenCalled();
  });
});
