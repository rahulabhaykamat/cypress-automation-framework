///<reference types='Cypress' />
describe('Second Test Suite', () => {
    it('First Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        //each method will iterate through the array
        //$el will be the object of the array
        //index will be the index value
        //$list will be the actual list of array
        cy.get('.products').find('.product').each(($el,index,$list) => {
            const textVeg = $el.find('h4.product-name').text()
            //includes is used to search a substring
            if(textVeg.includes('Cashews')){
                //find using html tag button
                //trigger method used to trigger an event
                // $el.find('button').trigger('click')

                cy.wrap($el).find('.product-price').invoke('text').as('prodPrice')
                cy.get('@prodPrice').should('include','650')
                //alternative to trigger we can use wrap method to wrap the iterated element and then use click method
                cy.wrap($el).find('button').click()
                cy.wrap($el).find('button').should('have.class','added')
                cy.wrap($el).find('button').should('contain','ADDED')

                cy.get('.cart-icon').click()
                cy.get('.cart-preview.active').as('cartPreview')
                //invoke method is used to validate the attribute and value
                cy.get('@cartPreview').find('.product-image').invoke('attr','src').should('include','cashews.jpg')             
                cy.get('@cartPreview').find('.product-name').contains('Cashew')
                cy.get('@cartPreview').find('.product-price').contains('650')
                cy.get('@cartPreview').contains('PROCEED TO CHECKOUT').click()

                cy.contains('Place Order').click()
            }
        })        

    });
});