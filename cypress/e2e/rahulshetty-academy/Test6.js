///<reference types='Cypress' />
describe('Sixth Test Suite', () => {
    it('First Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //mouse hover a DOM element by using 'invoke' method and using show, to display
        //immediate hidden child elements
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click() //if we use 'click({force:true}) then we can click without using 'invoke('show')'
        cy.url().should('include','top')
    });
});