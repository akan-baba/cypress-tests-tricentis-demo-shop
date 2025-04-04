export class UserLogin {
    webSelectors = {
      loginLink: '.ico-login',
      email: '#Email',
      password:  '#Password',
      loginButton: "input[value='Log in']",
      verifyLogin:"div[class='header-links'] a[class='account']",
      forgotPwdLink: "a[href='/passwordrecovery']",
      recoverBtn:"input[value='Recover']",
      recoverPwdMessage:'.result'
    }

    pageActions = {
      clickLoginLink: () => cy.get(this.webSelectors.loginLink),
      enterEmail: () => cy.get(this.webSelectors.email),
      enterPassword: () => cy.get(this.webSelectors.password),
      clickLoginButton: () => cy.get(this.webSelectors.loginButton),
      verifyLogin: () => cy.get(this.webSelectors.verifyLogin),
      clickForgotPwdLink: () => cy.get(this.webSelectors.forgotPwdLink),
      enterRecoveryEmail: () => cy.get(this.webSelectors.email),
      clickRecoverButton: () => cy.get(this.webSelectors.recoverBtn),
      verifyRecoveryMessage: () => cy.get(this.webSelectors.recoverPwdMessage)
    }
    
}