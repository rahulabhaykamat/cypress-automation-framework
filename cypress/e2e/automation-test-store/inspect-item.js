///<reference types='Cypress' />

describe('Inspect automation test store items using chain of commands', () => {
    it('Click on the first item using item header', () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
    });

    it.only('Click on the first item using item text', () => {
        cy.visit('https://www.automationteststore.com/')
        //then command is used as Promise
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText) {
            console.log(itemHeaderText.text())
         })
    });

    it('Click on the first item using index', () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    });
});