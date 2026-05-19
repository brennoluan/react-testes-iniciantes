import mergeClass from "./mergeClass.js";

describe("./mergeClass.js", () => {
  it("should return the base class of the todo-item when the item is not completed", () => {
    expect(mergeClass(false)).toBe("todo-item");
  });

  it("should return the base class of the todo-item when the item is completed", () => {
    expect(mergeClass(true)).toBe("todo-item completed");
  });

  it.each([
    { input: true, output: "todo-item completed" },
    { input: false, output: "todo-item" },
  ])("should return the base class of the $output when the is $input", ({ input, output }) => {
    expect(mergeClass(input)).toBe(output);
  });
});
