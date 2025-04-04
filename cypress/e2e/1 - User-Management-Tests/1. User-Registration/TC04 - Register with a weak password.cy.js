import { Environment } from "../../../support/utils/environs";
import { UserRegistration } from "../../../support/pages/registrationPage";
import { faker } from "@faker-js/faker";

const userRegistration = new UserRegistration();
const baseUrl = Environment.getBaseUrl();
const firstname = faker.person.firstName();
const lastname = faker.person.lastName();

describe('User Registration', () => {
    it('Registration Page', () => {
        cy.visit(baseUrl);
        userRegistration.pageActions.clickRegisterLink().click();
        userRegistration.pageActions.selectMaleGender().click()
        userRegistration.pageActions.enterFirstName().type(firstname)
        userRegistration.pageActions.enterLastName().type(lastname)
        userRegistration.pageActions.enterEmail().type('Lauretta_Sporer')
        userRegistration.pageActions.enterPassword().type('red1')
        userRegistration.pageActions.enterConfirmPassword().type('red1234')
        cy.assertAnyValidationMessage("The password should have at least 6 characters.");

    });
});