/// <reference types="Cypress" />

describe('JSON object', () => {
    it('JSON object examples', () => {
        const exampleObject={"key1": "Tim", "key2": "Jones"}
        cy.log(exampleObject["key1"])
        cy.log(exampleObject["key2"])
        cy.log(exampleObject.key1)
        
        const exampleArrayOfValues=["Sophie","Rose","Howard"]
        cy.log(exampleArrayOfValues[0])
        cy.log(exampleArrayOfValues[1])


        const users = {
            "firstName": "Rahul",
            "lastName": "Kamat",
            "age": 35,

            "students":[
                {
                    "firstName": "Sagar",
                    "lastName": "Patil",
                },
                {
                    "firstName": "Vinayak",
                    "lastName": "Mangaonkar",
                }
            ]
        }

        cy.log(users.firstName)
        cy.log(users.lastName)
        cy.log(users.age)
        cy.log(users.students[0].firstName)
        cy.log(users.students[1].firstName)

        const exampleArrayOfObjects=[{"key1":"Mumbai"},{"key2":"Dehdradun"},{"key3":"Guwahati"}]
        cy.log(exampleArrayOfObjects[0].key1)
        cy.log(exampleArrayOfObjects[1].key2)
        cy.log(exampleArrayOfObjects[2].key3)

    });
});