///<reference types="Cypress" />

describe('Pure API Test Suite', () => {
    it('Pure API Test case', () => {
        
        cy.request('POST','http://216.10.245.166/Library/Addbook.php',
        {
            "name":"Learn Appium Automation with Java",
            "isbn":"tech",
            "aisle":"IT",
            "author":"John Foe"
        }).then(function(res){
            expect(res.body).to.have.property("Msg","successfully added")
            expect(res.statusText).to.equal('OK')
            expect(res.status).to.eq(200)
        })
    });
});