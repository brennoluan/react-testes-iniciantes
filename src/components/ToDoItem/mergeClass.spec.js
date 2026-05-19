import mergeClass from "./mergeClass.js";

describe("./mergeClass.js", () => {
  it("should return the base class of the todo-item when the item is not completed", () => {
    expect(mergeClass(false)).toBe("todo-item");
  });

  it("should return the base class of the todo-item when the item is completed", () => {
    expect(mergeClass(true)).toBe("todo-item completed");
  });
});
