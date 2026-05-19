import { render } from "@testing-library/react";
import { Header } from "./index.jsx";

describe("Header", () => {
  it("should render the header", () => {
    expect(render(<Header />)).toBeTruthy();
  });

  it("should render the header with the correct class", () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toHaveClass("header");
  });
});
