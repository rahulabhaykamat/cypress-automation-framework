/// <reference types='Cypress' />

describe('Test Contact Us form via Automation Test Store', () => {
    before(function() {
        cy.viewport(550,1000)
        cy.fixture('userDetails').as('user')
    });

    it('Should be able to submit a successful submission via Contact Us form', () => {
        cy.visit('https://www.automationteststore.com/')
        // cy.get('.info_links_footer > :nth-child(5) > a').click() 

        //for using xpath we need to download xpath using command - npm install --save-dev @cypress/xpath
        //and add command - require('@cypress/xpath'); to support>e2e.js file
        cy.xpath("//a[text()='Contact Us']").click().then(function(linkText) {
            console.log(linkText.text())
        })

        cy.get('@user').then((usr)=>{
            cy.get('#ContactUsFrm_first_name').type(usr.firstName)
            cy.get('#ContactUsFrm_email').type(usr.email)
        })
   
        //Refer for assertion info https://docs.cypress.io/guides/references/assertions#Adding-New-Assertions
        cy.get('#ContactUsFrm_email').should('have.attr','name','email')
        cy.get('#ContactUsFrm_enquiry').type('entered via Cypress')
        // cy.get('.col-md-6 > .btn').click() 
        cy.xpath("//button[@title='Submit']").click()

        //Refer for assertion info https://www.chaijs.com/guide/styles/#should
        //chai is an assertion library which comes pre-bundled with Cypress
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
        console.log('Non Cypress command - Test has completed')
        cy.log('Cypress command - Test has completed')
    });
});