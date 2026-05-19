describe("Edit Item", () => {
  it("passes", () => {
    cy.visit("http://192.168.1.114:5173/");
    cy.contains("anything", { timeout: 6000 }).parent().find('[aria-label="edit"]').click();
    cy.get("input[name=description]").clear().type("anything updated");
    cy.get("button[type=submit]").click();
    cy.contains("anything updated");
  });
});
