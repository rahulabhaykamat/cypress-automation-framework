///<reference types='Cypress' />
describe('Fifth Test Suite', () => {
    it('First Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //iterate through all values of a particular column
        cy.get('#product tr td:nth-child(2)').each(($el,index,$list) => {
            //search for a particular text in the column
            if($el.text().includes('Python')){
                //'next' method is used to move to the following sibling of a particular DOM element
                //invoke method gets the text and stores in an alias
                // cy.wrap($el).next().invoke('text').as('price')
                // cy.get('@price').should('include','25')

                //another way

                //with the locator for the column, use '.eq' with 'index'
                cy.get('#product tr td:nth-child(2)').eq(index).next().then(function(price){
                    expect(price.text()).to.equal('25')
                })
            }
        })

    });
});