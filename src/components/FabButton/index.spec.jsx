import { FabButton } from "./index.jsx";
import { render } from "@testing-library/react";

describe("FabButton", () => {
  it("should render the fab button", () => {
    const { getByRole } = render(<FabButton onClick={() => {}}>Simple text</FabButton>);
    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("fab");
    expect(button).toHaveTextContent("Simple text");
  });
});
