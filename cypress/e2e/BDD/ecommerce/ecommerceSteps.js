///<reference types="Cypress" />
//import pageObject class
import homePage from "../../pageObjects/homePage"
import shopPage from "../../pageObjects/shopPage"
import checkoutPage from "../../pageObjects/checkoutPage"
import deliveryPage from "../../pageObjects/deliveryPage"

//import cypress cucumber notations
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
// import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


//create object of pageObject class
const home = new homePage
const shop = new shopPage
const checkout = new checkoutPage
const delivery = new deliveryPage

//global variable
var actTotalPrice=0
var fName

Given('I open eCommerce page', function(){
    //retrieving value from config-->env
    cy.visit(Cypress.env('url') + '/angularpractice/')
})

When('I add items to cart', function(){
    cy.get("a[href*='shop']").click()

        this.data.productName.forEach(function(element) {
            // cy.pause()
            cy.selectProduct(element)
        });
        shop.getCheckout().click()  
})

Then('validate the total price',function(){     
        
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
})

When('select the delivery country and submit',function(){
    delivery.getDeliveryCountry().type(this.data.deliveryCountry)
        delivery.getCountry().click()
        //explicitly override the config value from this line of this indiv test (it)
        Cypress.config('defaultCommandTimeout',10000)

        delivery.getAgree().check({force:true})
        delivery.getPurchase().click()
})

Then('validate the success message',()=>{
    delivery.getSuccess().should('be.visible')
})

When('I fill the form details',function(dataTable) {
    //read data from dataTable passed through the scenario
    fName = dataTable.rawTable[1][0]
    home.getName().type(fName)
    
    //accessing methods from page object class
    home.getEmail().type(this.data.email)
    home.getPassword().type(this.data.password)
    if(this.data.icecream==='Yes'){
        home.getIcecream().check()
    }
    home.getGender().select(dataTable.rawTable[1][1])
    if(this.data.employment==='Employed'){
        home.getEmployed().check()
    }
    home.getBirthday().type(this.data.birthday)
    home.getSubmit().click()
})

Then('validate the form behaviour',() =>{
    home.getEnterpreneur().should('be.disabled')
    home.getSuccess().should('be.visible')
    home.getTwoWayDataBinding().should('have.value',fName)
    home.getName().should('have.attr','minlength','2')
})

Then('select the shop page',()=>{
    cy.get("a[href*='shop']").click()
})