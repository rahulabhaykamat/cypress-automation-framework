class deliveryPage {

    getDeliveryCountry(){
        return cy.get('#country')
    }

    getCountry(){
        return cy.get('.suggestions ul li a')
    }

    getAgree(){
        return cy.get('#checkbox2')
    }

    getPurchase(){
        return cy.get('.btn-success')
    }

    getSuccess(){
        return cy.get('.alert-success')
    }
}

export default deliveryPage