describe('FASB Functional Testing ', () => {

    it('Test Scenario 1] To click "FASB" Card able to Navigate the "Validate DoType " Field', () => {
        cy.visit('http://localhost:5173/')
        cy.title().should("eq","PwC")
        cy.wait(1000)
        cy.xpath('//input[@id="login-username"]').type("ditaparserpwc@test.com")
        cy.xpath('//input[@id="login-password"]').type("meta@321")
        cy.get('button[type="submit"]').click()


        // To click "FASB" Card able to Navigate the "Validate DoType " Field'
        cy.xpath('//h3[text()=" FASB "]').click().url("http://localhost:5173/fasb/uploadfile")
        cy.xpath('//button[@id="DocTypeValiBtn"]').contains("Validate DocType")
    cy.wait(5000)
    // Go Back to previous page
       cy.go('back')
       cy.wait(5000)

       //Test Case 2] To check Dropdown Functionality- to click logout to  logout and able  to navigate sign in page "
       cy.xpath('//span[text()="DITAParser"]').contains("DITAParser").click()
       cy.wait(5000)
     cy.xpath ('//span[text()="Log Out"]').click().url("http://localhost:5173/auth/signin3")
     cy.wait(3000)


   
           
      
     
         })
 
   
})