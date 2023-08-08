///<reference types ="Cypress" />

var bChange

describe('Test datepicker via webdriveruni', () => {
    it('Select date from the datepicker', () => {
        cy.visit('/')
        cy.get('#datepicker').invoke('removeAttr','target').click({force:true})

        cy.get('#datepicker').click()

        //create an object for Date class
        let dt = new Date()
        //setDate() method sets the date value
        dt.setDate(dt.getDate() + 2) //getDate() returns today's day (e.g. 4) + 2 will give value as 6
        dt.setDate(dt.getDate() - 2) //this will give value as 2

        

        cy.log('Today\'s day is: ' + dt.getDate())
        cy.log('Two days from today is: ' + (dt.getDate() + 2))
        cy.log('Two days prior to today is: ' + (dt.getDate() -2))

        dt.setDate(dt.getDate() + 40)
        var year = dt.getFullYear()
        var month = dt.getMonth()//this will give numeric value of month (e.g. 8 for August)
        var mth = dt.toLocaleString('default', {month: 'long'}) //this will give string value of month (e.g. August)
        var day = dt.getDate()
        cy.log(year + ' ' + mth + ' ' + day)
        selectMonthYear()
        selectDay()

        var actMonthYear
        var actYear
        var bPrevYear = false

        function selectMonthYear() {
            //this will continue to click on Next/Prev until the year matches the expected value
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(monthYear=>{
            
            actMonthYear = (monthYear.text()).split(" ")
            actYear = Number(actMonthYear[1].trim())    

                if(!monthYear.text().includes(year)){
                    if(actYear < year){
                        bChange=true
                        cy.get('.next:visible').click()
                    }else if(actYear > year){
                        bPrevYear= true
                        bChange=true
                        cy.get('.prev:visible').click()
                    }
                        selectMonthYear()
                }
            }).then(()=>{
                //this will continue to click on Next until the month matches the expected value
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(monthYear=>{
                    if(!monthYear.text().includes(mth)){
                        if(bPrevYear===false){
                            bChange=true
                            cy.get('.next:visible').click()
                        }else{
                            bChange=true
                            cy.get('.prev:visible').click()
                        }
                        selectMonthYear()
                    }
                })
            })
            cy.log('In first method' + bChange)
        }
        
        //this will click on the day of the month that matches the expected value
        function selectDay(){
            if(bChange===true){
                cy.get('td[class=day]').contains(day).click()
            }else if(bChange===false){
                cy.get("td[class='today day']").click()             
            }
        }

    });
});