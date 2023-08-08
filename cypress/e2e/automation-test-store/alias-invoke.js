///<reference types='Cypress' />

describe('Alias and Invoke', () => {    
    
    it('Validate a specific Hair Care product', () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt',5)
        cy.get('@productThumbnail').should('include','Seaweed Conditioner')
    });

    it('Validate product thumbnail', () => {
        cy.visit('https://www.automationteststore.com/')

        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length',16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr','title').should('include','Add to Cart')
    });

    it.only('Calculate total of normal and sale products', () => {
        cy.visit('https://www.automationteststore.com/')

        cy.get('.thumbnail').as('productThumbnail')
        // cy.get('@productThumbnail').find('.oneprice').each(($elm,index,$list) => {
        //     cy.log($elm.text())
        // });
        cy.get('@productThumbnail').find('.oneprice').invoke('text').as('itemNonSalePrice')
        cy.get('@productThumbnail').find('.pricenew').invoke('text').as('itemSalePrice')

        var totalItemPrice=0

        cy.get('@itemNonSalePrice').then($linkText => {
            var itemNonSalePrice = $linkText.split('$')
            var i;
            var totalNonSalePrice=0;

            for(i=0;i<itemNonSalePrice.length;i++){
                cy.log(itemNonSalePrice[i])
                totalNonSalePrice += Number(itemNonSalePrice[i])
            }
            cy.log("Non sale price total is " + totalNonSalePrice)
            totalItemPrice += totalNonSalePrice
        })

        cy.get('@itemSalePrice').then($linkText => {
            var itemSalePrice = $linkText.split('$')
            var j;
            var totalSalePrice=0;
            
            for(j=0;j<itemSalePrice.length;j++){
                cy.log(itemSalePrice[j])
                totalSalePrice += Number(itemSalePrice[j])
            }
            cy.log("Sale price total is " + totalSalePrice)
            totalItemPrice += totalSalePrice
            cy.log("Total item price is " + totalItemPrice)
        }).then(() => {
            expect(totalItemPrice).to.equal(660.5)
        })        

    });

});
