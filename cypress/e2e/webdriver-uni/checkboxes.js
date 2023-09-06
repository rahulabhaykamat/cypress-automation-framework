/// <reference types="Cypress" />

describe('Verify checboxes via webdriveruni',()=>{
    beforeEach(() => {
        cy.visit('/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})        
    });

    it('Check and validate checkbox',()=>{
        
        cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
        cy.get(':nth-child(3) > input').should('not.be.checked')
    })

    it('Uncheck and validate checkbox', () => {
        cy.get(':nth-child(5) > input').uncheck().should('not.be.checked')
    });

    it('Check multiple checkboxes', () => {
        
        cy.get("input[type='checkbox']").check(["option-1","option-2","option-3","option-4"]).should('be.checked')

    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Click on all radio-buttons', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[value="green"]').check();
        cy.get('[value="blue"]').check();
        cy.get('[value="yellow"]').check();
        cy.get('#radio-buttons > [value="orange"]').check();
        cy.get('[value="purple"]').check();
        /* ==== End Cypress Studio ==== */
    });
})