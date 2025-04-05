import { Environment } from "../../../../support/utils/environs";
const baseUrl = Environment.getBaseUrl();


describe('Computer', () => {

    it('Build your own cheap computer', () => {
        cy.visit(baseUrl);
        cy.linkText().contains('Computers').click({force: true})
        cy.linkText().contains('Desktops').click({force: true})
        cy.get('input[value="Add to cart"]').eq(0).click({ force: true });
        cy.get('[type="radio"]').eq(0).click({force: true})
        cy.get('[type="radio"]').eq(3).click({force: true})
        cy.get('[type="radio"]').eq(7).click({force: true})
        cy.get('[type="checkbox"]').eq(0).click({force: true})
        cy.get('#add-to-cart-button-72').click()
        cy.linkText().contains('Shopping cart').click({force: true})
        cy.get('#termsofservice').click()
        cy.get('.checkout-buttons').click()
        cy.checkoutAsguestwithCC()
    });
    
});
