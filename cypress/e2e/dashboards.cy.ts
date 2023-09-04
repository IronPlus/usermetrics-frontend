describe("test dashboards page", () => {
  it("should display dashboards page", () => {
    cy.intercept("/usermetrics-v1/dashboards", { fixture: "dashboards.json" });
    cy.visit("/dashboards");
    cy.get(".header-component").contains("Usermetrics").should("exist");
    cy.get(".dashboards-container").contains("User dashboards").should("exist");
    cy.get(".dashboard-component").should("exist");
    cy.get(".dashboard-component .chart").should("exist");
  });
});
