///<reference types ="Cypress" />

describe('Test File Upload via Webdriveruni', () => {
    
    beforeEach(()=>{
        cy.visit('/')
        cy.get('#file-upload').invoke('removeAttr','target').click({force:true})
        
    })
    
    it('Upload a file', () => {
        cy.get('#myFile').selectFile("cypress/fixtures/optym.txt")
    });

    it('Upload No file', () => {
    });

    afterEach(() => {
        cy.get('#submit-button').click()
    });
});