/// <reference types="Cypress" />

describe('Test mouse actions',()=>{

    it('Scroll element into view',()=>{
        
        cy.visit('/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force:true})
        
    })

    it('I should be able to drag and drop a draggable item',()=>{
        
        cy.visit('/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force:true})
        //press left mouse key on the draggable box
        cy.get('#draggable').trigger('mousedown',{which: 1})
        //move mouse to drop box and then release left mouse key
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
        
    })

    it('I should be able to perform a double mouse click',()=>{
        
        cy.visit('/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force:true})
        //double left mouse click
        cy.get('#double-click').dblclick()
        
    })

    it.only('I should be able to hold down left mouse click button on a given element',()=>{
        
        cy.visit('/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click({force:true})
        //hold down left mouse key on an element
        cy.get('#click-box').trigger('mousedown',{which: 1}).then(($element) => {
            expect($element).to.have.css('background-color','rgb(0, 255, 0)')
        })

        
    })


})