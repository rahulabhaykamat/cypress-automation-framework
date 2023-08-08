class homePage {

    getName(){
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getEmail(){
        return cy.get('input[name="email"]')
    }

    getPassword(){
        return cy.get('input[id="exampleInputPassword1"]')
    }

    getIcecream(){
        return cy.get("input[id='exampleCheck1']")
    }

    getGender(){
        return cy.get('select')
    }

    getEmployed(){
        return cy.get("input[id='inlineRadio2']")
    }

    getEnterpreneur(){
        return cy.get("input[id='inlineRadio3']")
    }

    getBirthday(){
        return cy.get("input[name='bday']")
    }

    getSubmit(){
        return cy.get('.btn-success')
    }

    getSuccess(){
        return cy.get('.alert-success')
    }

    getTwoWayDataBinding(){
        return cy.get('input[name="name"]:nth-child(1)')
    }
}

export default homePage