///<reference types='Cypress' />

describe('Iterate over elements', () => {    
    beforeEach(() => {
        
        cy.visit('https://www.automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    });
    
    it('Log information of all Hair Care products', () => {
        cy.get('.fixed_wrapper .prdocutname').each(($elm,index,$list) => {
            cy.log("Index : " + index + " : " + $elm.text())
        });
    });

    it('Add specific product to basket', () => {
        // calling custom method
        cy.selectProd('Curls to straight Shampoo')
    });

    it('Add another specific product to basket', () => {        
        // calling custom method
        cy.selectProd('Seaweed Conditioner')
    });

    it('Add yet another specific product to basket', () => {        
        // calling custom method
        cy.selectProd('Eau Parfumee au The Vert Shampoo')
    });

})