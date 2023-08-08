///<reference types='Cypress' />
describe('First Test Suite', () => {
    it('First Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //get selector for only visible DOM elements
        cy.get('.product:visible').should('have.length',4)

        //use Alias (as) to replace multiple instances of locator by a variable
        cy.get('.products').as('productLocator')
        //get parent child chaining using find method
        //should is a Chai assertion
        //alias variable can be accessed using @ symbol
        cy.get('@productLocator').find('.product').should('have.length',4)

        //eq will find an element from an array of elements using index (starts with 0)
        //contains will search a DOM with the text mentioned
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()

        //eq with a negative value will find the element from the last (-2 will be the second last object in the array)
        cy.get('@productLocator').find('.product').eq(-2).find('.product-action > button').click()

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

                //alternative to trigger we can use wrap method to wrap the iterated element and then use click method
                cy.wrap($el).find('button').click()
            }
        })

        //then method is used to resolve promises manually for non cypress commands like text(), console.log
        //can write a function like 'function()'
        cy.get('.brand').then(function(logo){
            cy.log(logo.text())
        })

        //or can write a function like '() =>'
        cy.get('.brand').then(($logo) => {
            cy.log($logo.text())
        })


        console.log("this is asynchronous and gets printed at the beginning of the script")
        cy.wait(1000).then(function(){
            console.log("this is made synchronous by using then method and gets printed as per the sequence of code")
        })

        cy.get('.brand').should('have.text','GREENKART')

    });
});