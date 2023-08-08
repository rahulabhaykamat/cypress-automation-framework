/// <reference types="Cypress" />

describe('Verify radiobuttons via webdriveruni',()=>{
    beforeEach(() => {
        
        cy.visit('/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
    });

    it('Check specific radiobuttons',()=>{
        
        cy.get('#radio-buttons').find("[type='radio']").first().check()
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check()
    })

    it('Validate the states of specific radiobuttons',()=>{

        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='cabbage']").should('be.disabled')
        cy.get("[value='pumpkin']").should('be.checked')

        cy.get("[value='lettuce']").check().should('be.checked')
    })
})