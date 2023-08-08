class checkoutPage {

    getIndividualProductPrice(){
        return cy.get('.col-md-1:nth-child(4)')
    }

    getTotalProductPrice(){
        return cy.get('.text-right h3 strong')
    }
    getCheckout(){
        return cy.get('.btn-success')
    }
}

export default checkoutPage