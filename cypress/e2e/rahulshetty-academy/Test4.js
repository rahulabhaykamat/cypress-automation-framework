///<reference types='Cypress' />
describe('Fourth Test Suite', () => {
    it('First Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //ALERT POP UP. By default Cypress accepts alert pop up
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        //on method will exclusively trigger the alert using 'window:alert' and then we can extract the alert text
        cy.on('window:alert',((alertString) => {
            //we can assert two strings using Mocha assertion 'expect'
            expect(alertString).to.equal('Hello , share this practice page and share your knowledge')
        }))

        //on method can exclusively also trigger the confirm pop up using 'window:confirm' and then we can extract the confirm text
        cy.on('window:confirm', ((confirmString) => {
            expect(confirmString).to.equal('Hello , Are you sure you want to confirm?')
        }))

        cy.get('#confirmbtn').click()

        //to reject a confirm pop up
        cy.on('window:confirm', () => {
            return false
        })



        //handling multiple tabs/windows
        //Cypress doesn't support multiple tabs/windows. Workaround is by removing the 'target' attribute
        //of the DOM element using 'invoke' method of JQuery
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','qaclick')
        cy.go('back')
        cy.url().should('include','rahul')

        //browser navigation
        cy.go('forward')
        cy.url().should('include','qaclick')
    });
});