///<reference types="Cypress" />

describe('Security Testing using Cypress', () => {
    it('Intercept Req and Modify', () => {
        
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req) =>{
            req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'

            req.continue((res) =>{
                
            })
        }).as('modifiedReq')

        cy.get('.btn.btn-primary').click()
        cy.wait('@modifiedReq')

    });
});