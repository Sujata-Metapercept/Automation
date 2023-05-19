
describe('Valiadte DITA Source  Functional Testing ', () => {

    it('Test Scenario 1] To click Next Button To Navigate "Valiadte DITA Source" Field', () => {
        cy.visit('http://localhost:5173/')
        cy.title().should("eq","PwC")
        cy.wait(1000)
        cy.xpath('//input[@id="login-username"]').type("ditaparserpwc@test.com")
        cy.xpath('//input[@id="login-password"]').type("meta@321")
        cy.get('button[type="submit"]').click()
        cy.wait(2000)
       cy.xpath('//h3[text()=" FASB "]').click()
       cy.xpath('//button[@id="DocTypeValiBtn"]').contains("Validate DocType")
        cy.xpath('//button[text()=" Next "]').click()
        cy.wait(5000)
// Test Case 

  
         })
 
   
})