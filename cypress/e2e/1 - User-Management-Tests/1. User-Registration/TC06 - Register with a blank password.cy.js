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
        userRegistration.pageActions.clickRegisterButton().click()
        cy.assertAnyValidationMessage("Password is required.");

    });
});