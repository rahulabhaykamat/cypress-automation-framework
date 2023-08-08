///<reference types="Cypress"/>

describe('Test Suite to test Session storage', () => {
    it('Test case to test Session storage', () => {
        cy.LoginAPI().then(function(){
            cy.visit('https://sso.teachable.com/secure/9521/identity/login/password',{
                onBeforeLoad :function(window)
                {
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })
        })
    });
});