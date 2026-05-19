import { render } from "@testing-library/react";
import { Container } from "./index.jsx";

describe("Container", () => {
  it("should render the container", () => {
    const { getByText, container } = render(<Container>anything</Container>);
    expect(getByText("anything")).toBeInTheDocument();
    expect(container.querySelector(".container")).toBeInTheDocument();
  });
});
