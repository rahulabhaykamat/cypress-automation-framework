class qlLoginPage {

    getWelcome(){
        return cy.get('p:nth-child(1):visible')
    }

    getPassword(){
        return cy.get("input[type='password']")
    }

    getLogin(){
        return cy.get('#login-btn')
    }

    getLoginInputFields(){
        return cy.get('.css-1jvcolp')
    }

    getUIDSection(){
        return cy.get('.css-1jvcolp').find('.css-xzxmft').eq(0)
    }

    getEmailSection(){
        return cy.get('.css-1jvcolp').find('.css-xzxmft').eq(1)
    }

    getPasswordSection(){
        return cy.get('.css-1jvcolp').find('.css-xzxmft').eq(2)
    }

    getRememberMeSection(){
        return cy.get('.css-1jvcolp').find('.css-xzxmft').eq(3)
    }

    getRememberMe(){
        return cy.get("[data-testid='CheckBoxOutlineBlankIcon']")
        // return cy.get("cy.get('.PrivateSwitchBase-input')")
    }

    getForgotPassword(){
        return cy.get("a[href*='forgot']")
    }

    getSignUp(){
        return cy.get("a[href*='registration']")
    }

    getBackToLogin(){
        return cy.get('button:nth-child(1)')
    }

    getReset(){
        return cy.get('button:nth-child(2)')
    }

    getForgotPasswordHeader(){
        return cy.get('.css-1o7anip >p')
    }
}

export default qlLoginPage