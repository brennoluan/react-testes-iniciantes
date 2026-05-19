import { ChecklistsWrapper } from "./index.jsx";
import { render } from "@testing-library/react";

describe("ChecklistsWrapper", () => {
  it("should render the checklists wrapper", () => {
    const { getByText, container } = render(<ChecklistsWrapper>anything</ChecklistsWrapper>);
    expect(getByText("anything")).toBeInTheDocument();
    expect(container.querySelector(".wrapper")).toBeInTheDocument();
  });
});
