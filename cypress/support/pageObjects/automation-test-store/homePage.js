class homePage{

    visitHomePage(){
        cy.visit(Cypress.env('automationteststoreUrl'))
    }

    clickHairCareMenu(){
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    }
}
export default homePage