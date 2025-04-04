

Cypress.Commands.add("assertAnyValidationMessage", (expectedText) => {
  cy.get("body").then(($body) => {
    if ($body.find(".field-validation-error").length > 0) {
      cy.get(".field-validation-error").should("contain.text", expectedText);
    } else if ($body.find(".validation-summary-errors").length > 0) {
      cy.get(".validation-summary-errors").should("contain.text", expectedText);
    } else {
      throw new Error("No validation message found on the page.");
    }
  });
});
