class qlHomePage {

    getHome(){
        return cy.get('.BreadCrumbs-sectionName')
    }

    getGuidanceContainer(){
        return cy.get('#pendo-guide-container')
    }

    getGuidance(){
        return cy.get('.bb-button._pendo-button-tertiaryButton._pendo-button')
    }

    getGuidanceToggle(){
        return cy.get("button[class*='tertiaryButton']")
    }

    getGuidanceOptions(){
        return cy.get("button[class*='primaryButton']")
    }
}

export default qlHomePage