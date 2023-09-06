import { Before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"

let stub

Before(()=>{
    stub=cy.stub()
})

Given('I access WebDriver University Login portal page', () =>{
    cy.visit('https://webdriveruniversity.com/Login-Portal/index.html?')
})

When('I enter a user name {word}',(username)=>{
    cy.get('#text').type(username)
})

And('I enter a password {word}',(password) => {
    cy.get('#password').type(password)
})

And('I click on Login button',()=>{
    cy.get('#login-button').click()
    cy.on('window:alert',stub)
})

Then('I should be presented with the {word} {word} message',(message1, message2) =>{
    const expectedMsg = message1 + ' ' + message2
    const actualMsg = stub.getCall(0)
    expect(actualMsg).to.be.calledWith(expectedMsg)
})