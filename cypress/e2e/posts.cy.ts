describe("test posts page", () => {
  it("should display posts page", () => {
    cy.intercept("/usermetrics-v1/posts/1", { fixture: "posts.json" });
    cy.visit("/posts");
    cy.get(".header-component").contains("Usermetrics").should("exist");
    cy.get(".posts-container").contains("All user posts").should("exist");
    cy.get(".MuiPagination-root").should("exist");
    cy.get(".post-component").should("exist");
    cy.get(".show-all-button").should("exist");
  });
});
