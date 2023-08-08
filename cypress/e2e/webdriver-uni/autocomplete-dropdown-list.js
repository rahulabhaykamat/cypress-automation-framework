/// <reference types="Cypress" />

describe('Verify autocomplete dropdown lists via webdriveruni',()=>{

    it('Select specific product via autocomplete dropdown lists',()=>{
        
        cy.visit('/')
        cy.get('#autocomplete-textfield').invoke('removeAttr','target').click({force:true})
        cy.get("[name='food-item']").type('A')

        cy.get('#myInputautocomplete-list > *').each(($el,index,$list) => {
            const prod = $el.text()
            const prodToSelect = 'Almond'

            if (prod===prodToSelect) {
                // $el.click()
                $el.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('include',prodToSelect)
            }
        }).then(() => {
            cy.get("[name='food-item']").type('G')

            cy.get('#myInputautocomplete-list > *').each(($el,index,$list) =>{
                const prod = $el.text()
                const prodToSelect = 'Grapes'

                if (prod===prodToSelect) {
                    // $el.click()
                    $el.trigger('click')
                    cy.get('#submit-button').click()
                    cy.url().should('include',prodToSelect)
                }
            })

            
        })
    })
})