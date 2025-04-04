export class UserRegistration {
  webSelectors = {
    registerLink:'.ico-register',
    maleGender: "#gender-male",
    femaleGender: "#gender-female",
    firstName: "#FirstName",
    lastName: "#LastName",
    email: "#Email",
    password: "#Password",
    confirmPassword: "#ConfirmPassword",
    registerButton: "#register-button",
    messageRegComplete: ".result"
  };

  pageActions = {
    clickRegisterLink: () => cy.get(this.webSelectors.registerLink),
    selectMaleGender: () => cy.get(this.webSelectors.maleGender),
    selectFemaleGender: () => cy.get(this.webSelectors.femaleGender),
    enterFirstName: () => cy.get(this.webSelectors.firstName),
    enterLastName: () => cy.get(this.webSelectors.lastName),
    enterEmail: () => cy.get(this.webSelectors.email),
    enterPassword: () => cy.get(this.webSelectors.password),
    enterConfirmPassword: () => cy.get(this.webSelectors.confirmPassword),
    clickRegisterButton: () => cy.get(this.webSelectors.registerButton),
    verifyRegistrationComplete: () => {
      return cy.get(this.webSelectors.messageRegComplete);
    }
  };
}
