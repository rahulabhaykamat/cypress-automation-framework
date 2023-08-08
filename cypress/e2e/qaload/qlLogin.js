///<reference types="Cypress" />

import qlLogin from "../pageObjects/qlLoginPage"

const login = new qlLogin


describe('Validate login page and its functionalities', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('qaloadurl')+"/login")
        cy.fixture('qlLogin').then(function(data){
            this.data=data
        })
    });

    it('Validate login fields', function () {
        cy.title().should('include','Loadops by Optym')
        login.getWelcome().should('have.text','Welcome Back') 

        login.getLoginInputFields().find('.css-xzxmft').should('have.length',4)
        
        login.getUIDSection().contains(this.data.UIDLabel)
        login.getUIDSection().contains('*')

        login.getEmailSection().contains(this.data.emailLabel)
        login.getEmailSection().contains('*')

        login.getPasswordSection().contains(this.data.passwordLabel)
        login.getPasswordSection().contains('*')

        // login.getRememberMeSection().find('.PrivateSwitchBase-input').should('be.visible')
        login.getRememberMeSection().contains('Remember me')

        login.getUIDSection().find('input').should('be.visible')
        login.getEmailSection().find('input').should('be.visible')
        login.getPassword().should('be.visible')
        login.getRememberMe().should('be.visible')
        // login.getRememberMe().should('be.visible').click({force:true})
        login.getForgotPassword().should('have.text','Forgot Password?')
        login.getSignUp().should('have.text','Sign up!')
        login.getLogin().should('be.visible')

    });

    it('Validate login functionality when clicked Login with no values entered', () => {
          
        login.getLogin().click()
        login.getUIDSection().find("label[class*='Mui-error']").should('be.visible')
        login.getEmailSection().find("label[class*='Mui-error']").should('be.visible')
        login.getPasswordSection().find("label[class*='Mui-error']").should('be.visible')
    });

    it('Validate login functionality when clicked Login with no UID entered', function() {
        login.getEmailSection().find('input').type(this.data.email)
        login.getPassword().type(this.data.password)
        login.getLogin().click()
        login.getUIDSection().find("label[class*='Mui-error']").should('be.visible')
    });

    it('Validate login functionality when clicked Login with no Email entered', function() {
        login.getUIDSection().find('input').type(this.data.UID)
        login.getPassword().type(this.data.password)
        login.getLogin().click()
        login.getEmailSection().find("label[class*='Mui-error']").should('be.visible')
    });

    it('Validate login functionality when clicked Login with no Password entered', function() {
        login.getUIDSection().find('input').type(this.data.UID)
        login.getEmailSection().find('input').type(this.data.email)
        login.getLogin().click()
        login.getPasswordSection().find("label[class*='Mui-error']").should('be.visible')
    });
    
    it('Validate login functionality when clicked Login with invalid Email entered', function() {
        login.getUIDSection().find('input').type(this.data.UID)
        login.getEmailSection().find('input').type(this.data.invalidemail)
        login.getPassword().type(this.data.password)
        login.getLogin().click()
        login.getEmailSection().find("p[class*='Mui-error']").should('be.visible')
    });

    it('Validate forgot password functionality', function() {
        login.getForgotPassword().click()
        cy.url().should('include','forgot-password')
        login.getForgotPasswordHeader().should('have.text','Forgot Password?')

        login.getUIDSection().contains(this.data.UIDLabel)
        login.getUIDSection().contains('*')

        login.getEmailSection().contains(this.data.emailLabel)
        login.getEmailSection().contains('*')

        login.getBackToLogin().should('have.text','Back to Log In')
        login.getReset().should('have.text','Reset')

        login.getBackToLogin().click()
        cy.url().should('not.include','forgot-password')
        login.getWelcome().should('have.text','Welcome Back') 
    });

    it('Validate user is redirected to Home page when entered valid credentials', function() {
        login.getUIDSection().find('input').type(this.data.UID)
        login.getEmailSection().find('input').type(this.data.email)
        login.getPassword().type(this.data.password)
        login.getLogin().click().should(()=> {
            localStorage.getItem()
        })    
    });
});
