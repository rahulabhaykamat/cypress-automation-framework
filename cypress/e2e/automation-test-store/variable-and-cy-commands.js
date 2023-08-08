///<reference types='Cypress' />

describe('Verifying variables, Cypress commands and Jquery commands', () => {    
    
    it('Navigating to specific product pages', () => {
        cy.visit('https://www.automationteststore.com/')
        // const makeUpLink=cy.get("a[href*='product/category&path=']").contains("Makeup")
        // const skinCareLink=cy.get("a[href*='product/category&path=']").contains("Skincare")

        // makeUpLink.click()
        // skinCareLink.click()

        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        cy.get("a[href*='product/category&path=']").contains("Skincare").click()
    });

    it('Navigating to specific product pages2', () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()

        //the following code will not work
        // const header=cy.get('.maintext')
        // cy.log(header.text())

        cy.get('.maintext').then(function(headerText) {
            cy.log(headerText.text())
        })

        //then command written in a different syntax
        cy.get('.maintext').then((headerValue) => {
            const headerVal=headerValue.text()
            cy.log("then with a different syntax - " + headerVal)
            expect(headerVal).is.eq('Makeup')
        })
    });
    it.only('Validate the properties of contact us page', () => {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')
   
        //Using cypress commands and chaining
        cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name')

        //JQuery approach
        cy.contains('#ContactUsFrm','Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')
            
            //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)
            })
        })


    });
});