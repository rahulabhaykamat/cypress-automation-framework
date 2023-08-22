/// <reference types="Cypress" />

import homePage from "../../support/pageObjects/webdriver-uni/homePage";
import contactusPage from "../../support/pageObjects/webdriver-uni/contactusPage"

describe('Test Contact Us form via WebdriverUni',()=>{

    const home = new homePage()
    const contactus = new contactusPage()

    beforeEach(() => {   
        //below code overrides the default setting in Cypress App --> Project settings
        //and also any settings in 'cypress.config.js'
        Cypress.config('defaultCommandTimeout',15000)
        home.visitHomePage()
        // cy.visit('/')
        home.clickContactUsButton()
        // cy.pause() //this will pause the execution at this point
    });

    it('Should be able to submit a successful submission via Contact Us form',()=>{
        
        //use .document() to access html document elements - https://docs.cypress.io/api/commands/document#Syntax
        cy.document().should('have.property','charset').and('eql','UTF-8')
        
        //use .title() to yeild the title of the page - https://docs.cypress.io/api/commands/title#Syntax
        cy.title().should('include','WebDriver')

        //use .url() to yeild the url of the page - https://docs.cypress.io/api/commands/url#Syntax
        cy.url().should('include','webdriver')
        
        //click({force:true}) will click on the element even if it is not visible
        //cy.get('#contact-us').click({force:true});
    
        contactus.contactUs_Submission(Cypress.env('first_name'),'Kamat','rahulabhaykamat@gmail.com',
        'entered through Cypress','h1','Thank You for your Message!')
        // following code will trigger the function from support > commands.js file
        // cy.webdriverUniContactFormSubmission(Cypress.env('first_name'),'Kamat','rahulabhaykamat@gmail.com',
        // 'entered through Cypress','h1','Thank You for your Message!')
    })

    //.only is mocha code to execute a specific it
    it('Should not be able to submit a successful submission via Contact Us form as all fields are required',()=>{
        // cy.visit('/Contact-Us/contactus.html');
        cy.webdriverUniContactFormSubmission('Rahul','Kamat',' ',
        'entered through Cypress','body','Error: Invalid email address')
    })
})