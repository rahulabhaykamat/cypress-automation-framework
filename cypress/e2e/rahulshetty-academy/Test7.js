///<reference types='Cypress' />
describe('Seventh Test Suite', () => {
    it('First Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //extracting attribute of a DOM element using 'prop' method
        // cy.get('#opentab').invoke('attr','href').as('urlVal').should('contain','qa')
        // cy.visit('@urlVal')

        cy.get('#opentab').then(($el) => {
            const urlToVisit = $el.prop('href')
            cy.visit(urlToVisit)
        })
        
    });
});