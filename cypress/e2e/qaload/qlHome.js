///<reference types = "Cypress" />

import qlLogin from "../pageObjects/qlLoginPage"
import qlHome from "../pageObjects/qlHomePage"

const login = new qlLogin
const home = new qlHome

describe('Validate Home page', () => {

    it.only('Test', () => {
        cy.visit('https://example.cypress.io', {
        onBeforeLoad(win) {
            win.localStorage.setItem('key', 'value')
        },
        })

        cy.getAllLocalStorage().then((result) => {
        expect(result).to.deep.equal({
            'https://example.cypress.io': {
            key: 'value',
            },
        })
})
    });

    it('Get All Local Storage', () => {
        
        cy.request('POST','https://qa.loadops.com/web/auth/api/v2/users/login/company',
    {"dot":"310887","email":"rahulabhaykamat@gmail.com","password":"UGFzc0AxMjM="}).
    then(function(response){
        expect(response.status).to.eq(200)
        Cypress.env('token',response.body.token)
    })

        cy.log(cy.getAllLocalStorage())
        // window.localStorage.getAllLocalStorage
        

        })
    });

    it('Test', () => {
        cy.session('rahulabhaykamat', () => {
            cy.request({
                method: 'POST',
                url: 'https://qa.loadops.com/web/auth/api/v2/users/login/company',
                body: {"dot":"310887","email":"rahulabhaykamat@gmail.com","password":"UGFzc0AxMjM="},
            }).then(({ body }) => {
                // cy.pause()
                window.localStorage.setItem('token', body.token)
                cy.log(body.token)
                // cy.pause()
                cy.visit('https://qa.loadops.com/operations/equipment')
            })
            })
        });

    it('JWT Session', () => {
        cy.LoginAPI().then(function(){
            cy.visit('https://qa.loadops.com/operations/equipment',{
                onBeforeLoad :function(window)
                {
                    window.localStorage.setItem('token','{\"access\":\"' + Cypress.env('token') + '\",\"refresh\":\"\"}')
                }
            })
        })
    });

    // it('Validate', () => {
    //     home.getHome().should('have.text','home')
        
    // });

    // it('Validate Guidance section', () => {
    //     home.getGuidanceContainer().should('be.visible')
    //     home.getGuidanceToggle().should('be.visible')
    //     home.getGuidanceOptions().should('have.length',5)

    // });
// });
