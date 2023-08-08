///<reference types="Cypress" />

describe('Test Suite for Front End and Back End integration', () => {
    it('Test case for Front End and Back End integration', () => {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        cy.intercept(request,response).as('checkThis')
        // cy.get('.btn.btn-primary').click().then(($elm)=>{
        //     $elm.should(({request,response})=>{
        //         cy.get('.table-dark tbody tr').should('have.length',response.body.length)
        //     })
        // })
        cy.get('.btn.btn-primary').click()
        cy.get('@checkThis').then(({request,response})=>{
                cy.get('.table-dark tbody tr').should('have.length',response.body.length)
            })
        })
});