describe("./mergeClass.js", () => {
  it("should return the base class of the todo-item when the item is not completed", () => {
    //Arrange
    const isItemCompleted = false;

    //Act
    const styles = mergeClass(isItemCompleted);

    //Assert
    expect(styles).toBe("todo-item");
  });

  it("should return the base class of the todo-item when the item is completed", () => {
    //Arrange
    const isItemCompleted = true;

    //Act
    const styles = mergeClass(isItemCompleted);

    //Assert
    expect(styles).toBe("todo-item completed");
  });
});
