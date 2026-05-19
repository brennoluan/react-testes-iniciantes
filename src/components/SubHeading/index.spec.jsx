import { render } from "@testing-library/react";
import { SubHeading } from "./index.jsx";

describe("SubHeading", () => {
  describe("getBy", () => {
    it("should render the subheading", () => {
      const { getByText } = render(<SubHeading>To study</SubHeading>);
      expect(getByText("To study")).toBeInTheDocument();
    });

    it.skip("should not render the subheading", () => {
      const { getByText } = render(<SubHeading></SubHeading>);
      expect(getByText("To study")).toBeNull();
    });
  });

  describe("queryByText", () => {
    it("should render the subheading", () => {
      const { queryByText } = render(<SubHeading>To study</SubHeading>);
      expect(queryByText("To study")).toBeInTheDocument();
    });

    it("should not render the subheading", () => {
      const { queryByText } = render(<SubHeading></SubHeading>);
      expect(queryByText("To study")).toBeNull();
    });
  });

  describe("findBy", () => {
    it("should render the text after 500ms", async () => {
      const { findByText } = render(<SubHeading>To study</SubHeading>);
      const description = await findByText("Adicione um novo item");
      expect(description).toBeInTheDocument();
    });
  });
});
