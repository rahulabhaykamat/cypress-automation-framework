///<reference types ='Cypress' />

//import pageObject class
import homePage from "../../support/pageObjects/rahul-shetty/homePage"
import shopPage from "../../support/pageObjects/rahul-shetty/shopPage"
import checkoutPage from "../../support/pageObjects/rahul-shetty/checkoutPage"
import deliveryPage from "../../support/pageObjects/rahul-shetty/deliveryPage"

//create object of pageObject class
const home = new homePage
const shop = new shopPage
const checkout = new checkoutPage
const delivery = new deliveryPage

//global variable
var actTotalPrice=0

describe('Nine Test Suite', () => {

    before(() => {            
    });

    beforeEach(() => {
        //retrieving value from config-->env
        cy.visit(Cypress.env('url') + '/angularpractice/')
        //cy.fixture will access json file from fixture and data from json gets stored in 'data' variable
        cy.fixture('example').then(function(data){
            //this.data -> creates a global variable which stores value of data
            this.data=data
        })  
    })

    it('Enter details on Home page Test Case', function() {
        //accessing methods from page object class
        home.getName().type(this.data.name)
        home.getEmail().type(this.data.email)
        home.getPassword().type(this.data.password)
        if(this.data.icecream==='Yes'){
            home.getIcecream().check()
        }
        home.getGender().select(this.data.gender)
        if(this.data.employment==='Employed'){
            home.getEmployed().check()
        }
        home.getEnterpreneur().should('be.disabled')
        home.getBirthday().type(this.data.birthday)
        home.getSubmit().click()
        home.getSuccess().should('be.visible')
        home.getTwoWayDataBinding().should('have.value',this.data.name)
        home.getName().should('have.attr','minlength','2')
    });

    it.only('Select, Add to Cart and Validate details on Checkout page', function () {
        cy.get("a[href*='shop']").click()

        //this will iterate for as many values are stored in productName array
        //element is an individual value in the productName array
        this.data.productName.forEach(function(element) {
            // cy.pause()

            //this will trigger the common method 'selectProduct' which takes
            //one input parameter. It is stored in support > commands.js file
            cy.selectProduct(element)
        });
        shop.getCheckout().click()  
        
        
        checkout.getIndividualProductPrice().each(($el,index,$list) => {
            const actualPrice = $el.text()
            var actPrice = actualPrice.split(" ")
            actPrice = actPrice[1].trim()
            cy.log(Number(actPrice))
            actTotalPrice += Number(actPrice)
        }).then(function(){
            checkout.getTotalProductPrice().then(function($el){
                const expectedTotalPrice = $el.text()
                var expTotalPrice = expectedTotalPrice.split(" ")
                var expTotalPrice = Number(expTotalPrice[1].trim())
                
                expect(actTotalPrice).to.equal(expTotalPrice)
            })

        })
        checkout.getCheckout().click()

        delivery.getDeliveryCountry().type(this.data.deliveryCountry)
        delivery.getCountry().click()
        //explicitly override the config value from this line of this indiv test (it)
        Cypress.config('defaultCommandTimeout',10000)

        delivery.getAgree().check({force:true})
        delivery.getPurchase().click()
        delivery.getSuccess().should('be.visible')
    });

});