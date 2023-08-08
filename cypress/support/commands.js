// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

import shopPage from "../../cypress/support/pageObjects/rahul-shetty/shopPage"
const shop = new shopPage

//this method will iterate through each object of 'getPhoneName'
//and will match the object's text with input variable 'phoneModel'
//if it matches then it will click on the object's AddToCart icon
Cypress.Commands.add('selectProduct', (phoneModel) => {
        shop.getPhoneName().each(($el,index,$list) => {
        if ($el.text().includes(phoneModel)) {
            shop.getAddToCart().eq(index).click()
        }
    })
})


//creating a global function that will save the login token
Cypress.Commands.add("LoginAPI", ()=>{
    cy.request('POST','https://qa.loadops.com/web/auth/api/v2/users/login/company',
    {"dot":"310887","email":"rahulabhaykamat@gmail.com","password":"UGFzc0AxMjM="}).
    then(function(response){
        expect(response.status).to.eq(200)
        Cypress.env('token',response.body.token)
    })
})

Cypress.Commands.add('selectProd', productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($elm,index,$list) => {
        if($elm.text().includes(productName)){
         cy.wrap($elm).click()
        }
     });
})

Cypress.Commands.add('addProductToBasket', productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($elm,index,$list) => {
        if($elm.text()===(productName)){
            cy.log($elm.text())
            cy.get('.productcart:visible').eq(index).click()   
        }
     });
})

Cypress.Commands.add('webdriverUniContactFormSubmission',(firstName, lastName, email, comments, $el, textToValidate) => {
    cy.get('[name="first_name"]').type(firstName)
    cy.get('[name="last_name"]').type(lastName)
    cy.get('[name="email"]').type(email)
    cy.get('textarea.feedback-input').type(comments)
    cy.get('[type="submit"]').click()
    cy.get($el).contains(textToValidate)
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })