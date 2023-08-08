///<reference types='Cypress' />
describe('Third Test Suite', () => {
    it('First Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //CHECKBOXES

        //assertion should('be.) is used to validate behaviour and should('have.) is used to validate property
        //multiple assertions (should) can be added in 1 line by using 'and' method
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        //checks and unchecks all checkboxes using common locator for all of them
        cy.get('[type="checkbox"]').check()
        cy.get('[type="checkbox"]').uncheck()

        //check and multiple checkboxes by passing the value of the checkboxes
        cy.get('[type="checkbox"]').check(['option1','option2'])
        cy.get('[type="checkbox"]').uncheck(['option1','option2'])


        //STATIC DROPDOWN
        //value can be selected by entering 'value' or text
        cy.get('select').select('option1')
        cy.get('select').select('Select')


        //DYNAMIC DROPDOWN
        cy.get('#autocomplete').type('Ind')
        cy.get('.ui-menu-item div').each(($el,index,$list) => {
            const countryName = $el.text()

            if(countryName==='India'){
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value','India')


        //VISIBLE AND INVISIBLE ELEMENTS
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //RADIO BUTTON
        cy.get('[value="radio1"]').check().should('be.checked')

    });
});