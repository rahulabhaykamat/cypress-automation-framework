class contactusPage{

    contactUs_Submission(firstName, lastName, email, comments, $el, textToValidate) {
        cy.get('[name="first_name"]').type(firstName)
        cy.get('[name="last_name"]').type(lastName)
        cy.get('[name="email"]').type(email)
        cy.get('textarea.feedback-input').type(comments)
        cy.screenshot('Screenshot before clicking on submit')
        cy.get('[type="submit"]').click()
        cy.screenshot()
        cy.get($el).contains(textToValidate)
    }

}

export default contactusPage