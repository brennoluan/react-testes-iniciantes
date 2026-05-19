describe("Delete Item", () => {
  it("passes", () => {
    cy.visit("http://192.168.1.114:5173/");
    cy.contains("anything", { timeout: 6000 }).parent().find('[aria-label="delete"]').click();
    cy.contains("anything").should("not.exist");
  });
});
