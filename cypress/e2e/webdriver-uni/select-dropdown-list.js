/// <reference types="Cypress" />

describe('Itneract with dropdown lists via webdriveruni',()=>{

    it('Select specific values via select dropdown lists',()=>{
        
        cy.visit('/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})

        //select based on index
        cy.get('#dropdowm-menu-1').select(1)
        //select based on attribute value
        cy.get('#dropdowm-menu-2').select('maven').should('have.value','maven')
        //select based on text
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')
        cy.get('#dropdowm-menu-3').select('JavaScript').contains('JavaScript')
    })
})