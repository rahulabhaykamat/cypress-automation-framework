///<reference types='Cypress' />
import homePage from "../../support/pageObjects/automation-test-store/homePage"
import haircarePage from "../../support/pageObjects/automation-test-store/haircarePage"

describe('Add multiple items to basked', () => {    
    const home = new homePage()
    const haircare = new haircarePage()
    before(() => {
        cy.fixture('products').then((data)=>{
            globalThis.data=data
        })
    });
    
    beforeEach(function() {   
        cy.clearAllLocalStorage()
        cy.clearAllCookies()
        cy.clearAllSessionStorage()     
        home.visitHomePage()
        home.clickHairCareMenu()
    });
    
    it('Add specific items to basket', () => {
        haircare.addHairCareProductsToCart()
    });
})
