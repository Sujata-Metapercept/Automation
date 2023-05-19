describe('PWC Page UI Testing', () => {

    it('Test Scenario 1] To PWC page contain  Heading="PwC DITA Parser" subheading="Welcome to your amazing app.", and sign In Form ', () => {
        cy.visit('http://localhost:5173/')
        cy.title().should("eq","PwC")
        cy.wait(1000)
        //Test Case 2] To check PWC page contain Heading= "PWC DITA Parser
        cy.xpath("//a[text()=' PwC DITA Parser ']").contains("PwC DITA Parser ")

        //Test Case 3] To check PWC page contain  Sub Heading = "Welcome to your amazing app.
        cy.xpath("//p[text()=' Welcome to your amazing app. ']").contains(" Welcome to your amazing app. ")
          cy.wait(1000)

          //Test Case 4] To check  Sign In contain Heading ="Sign In
          cy.xpath('//h1[text()="Sign In"]').contains("Sign In")
       cy.wait(1000)
           
      
      
    
         })
 
   
})