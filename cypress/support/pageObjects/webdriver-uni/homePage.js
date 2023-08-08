class homePage{

    visitHomePage(){
        cy.visit(Cypress.env('webDriverUniUrl'),{ timeout: 20000})
    }

    clickContactUsButton(){
        cy.get('#contact-us').invoke('removeAttr','target').pause().click({force:true},{ timeout: 3000 })
    }

}

export default homePage