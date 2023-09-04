describe("test error page", () => {
  it("should display error page", () => {
    cy.visit("/error");
    cy.get(".error-component").should("exist");
    cy.get(".error-component h2").should("have.text", "Something went wrong.");
    cy.get(".error-component a").should("have.text", "Back");
  });
});
