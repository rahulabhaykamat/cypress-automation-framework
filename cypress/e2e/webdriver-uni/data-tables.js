/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
      it("calculate and assert the total age of all users", () => {
        var userDetails = []
        cy.get('#thumbnail-1 td').each(($el,index,$list) => {
            cy.log($el.text())
            userDetails[index] = $el.text()
        }).then(() => {
            var i;
            let numb=0;
            for(i=0;i<userDetails.length;i++){
                //checks if value of the array is Number or not
                if(Number(userDetails[i])){
                    numb += Number(userDetails[i])
                }
            }
            expect(numb).to.eq(322)
        })
      });

      it("calculate and assert the age of a given user based on the Last name", () => {
        cy.get('#thumbnail-1 td:nth-child(2)').each(($elm,index,$list) => {
            if($elm.text()==='Woods'){
                //next() method moves nth-child(from '2' to '3')
                cy.get('#thumbnail-1 td:nth-child(2)').eq(index).next().then(function(age) {
                    expect(age.text()).to.eq('80')
                })
            }
        })
      });
})