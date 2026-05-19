describe("Create Item", () => {
  it("passes", () => {
    cy.visit("http://192.168.1.114:5173/");
    cy.get(".fab").click();
    cy.get("input[name=description]").type("anything");
    cy.get("button[type=submit]").click();
    cy.contains("anything", { timeout: 5000 });
  });
});
