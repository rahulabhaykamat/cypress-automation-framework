///<reference types="Cypress" />

describe('My First API test suite', () => {
    it('My First API test case', () => {
       
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

        //intercepting the HTTP response and modifying it
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },{
            statusCode: 200,
            body: [
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "RSU",
                    "aisle": "2301"
                }]
        }).as('bookList')

        cy.get('.btn.btn-primary').click()
        cy.wait('@bookList').then(({request,response})=>{            
            cy.get('.table-dark tbody tr').should('have.length',response.body.length)
        })
        cy.get('p').should('have.text','Oops only 1 Book available')
    });
});