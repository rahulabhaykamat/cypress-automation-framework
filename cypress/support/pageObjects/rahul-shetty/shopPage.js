class shopPage {

    getPhoneName(){
        return cy.get('app-card-list.row').find('.card-title')
    }

    getAddToCart(){
        return cy.get('.btn.btn-info')
    }

    getCheckout(){
        return cy.get('.btn-primary')
    }

}

export default shopPage