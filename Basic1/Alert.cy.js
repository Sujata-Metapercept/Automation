/// <reference types="cypress" />
describe('Alert', () => {
    it('ALert', () => {
        cy.visit("https://register.rediff.com/register/register.php")

        cy.get("input[id='Register']").click()
        //Events to accept the alert used Mocha framework . window:alert(Event), variable and 
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Your full name cannot be blank.\nPlease enter your firstname and lastname e.g. Sameer Bhagwat')

            //Confirmation Window


        })
// For Confirmation Alert containing the Ok and Cancel button
        it('ALert', () => {
            cy.visit("https://testautomationpractice.blogspot.com/")

            cy.get("input[id='Register']").click()
            //Events to accept the alert used Mocha framework . window:confirm(Event), variable and 
            cy.on('window:confirm', (str) => {
                expect(str).to.equal('Press a button!')
            })

        })
    })
})
