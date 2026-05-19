import ToDoGroup from "./index.jsx";
import { render } from "@testing-library/react";
import { TodoContext } from "../TodoProvider/TodoContext.js";

describe("ToDoGroup", () => {
  it("should render the message with isLoading true ", () => {
    const { getByText, queryAllByRole } = render(
      <ToDoGroup isLoading={true} todos={[]} heading="test" />,
    );
    expect(getByText("Carregando...")).toBeInTheDocument();
    expect(queryAllByRole("listitem")).toHaveLength(0);
  });

  it("should render the empty list message  ", () => {
    const { getByText, queryAllByRole, queryByText } = render(
      <ToDoGroup isLoading={false} todos={[]} heading="test" />,
    );
    expect(getByText("Nenhum item encontrado.")).toBeInTheDocument();
    expect(queryByText("Carregando...")).toBeNull();
    expect(queryAllByRole("listitem")).toHaveLength(0);
  });

  it("should render the group", () => {
    const { getByText, queryAllByRole } = render(<ToDoGroup todos={[]} heading="test" />);
    expect(getByText("test")).toBeInTheDocument();
    expect(queryAllByRole("listitem")).toHaveLength(0);
  });

  it("should render the items of group", () => {
    const items = [
      { id: 1, description: "anything", createdAt: Date.now() },
      { id: 2, description: "anything 2", createdAt: Date.now() },
    ];
    const { getByText, queryAllByRole } = render(
      <TodoContext.Provider value={{}}>
        <ToDoGroup todos={items} heading="test" />
      </TodoContext.Provider>,
    );
    expect(getByText("test")).toBeInTheDocument();
    expect(queryAllByRole("listitem")).toHaveLength(items.length);

    for (const item of items) expect(getByText(item.description)).toBeInTheDocument();
  });
});
