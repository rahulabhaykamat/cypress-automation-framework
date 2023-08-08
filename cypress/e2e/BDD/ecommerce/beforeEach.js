beforeEach(function(){
    //cy.fixture will access json file from fixture and data from json gets stored in 'data' variable
    cy.fixture('example').then(function(data){
        //this.data -> creates a global variable which stores value of data
        this.data=data
    })  
})