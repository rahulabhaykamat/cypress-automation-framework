///<reference types='Cypress' />
///<reference types='cypress-iframe' />
import 'cypress-iframe'

describe('Eight Test Suite', () => {
    it('First Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //working with iframe. By default Cypress doesn't support iframe
        //need to install by running command 'npm install -D cypress-iframe'
        //Add import 'cypress-iframe' statement on the top

        //load the iframe with it's css (id) using frameLoaded method
        cy.frameLoaded('#courses-iframe')

        //always use cy.iframe method to interact with DOM elements inside iframe
        cy.iframe().find("a[href='mentorship']").eq(0).click()

        //we can interact outside iframe without any changes
        cy.get('#name').type('Rahul')

        //to move back to iframe use again cy.iframe method
        cy.iframe().find('.register-btn').click()
        
    });
});