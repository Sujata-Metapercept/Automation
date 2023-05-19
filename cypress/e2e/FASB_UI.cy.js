describe('FASB UI Testing ', () => {

    it('Test Scenario 1] To check FASB Contain "FASB" Card having Heading "FASB", SubHeading=" Click here to select source files from FASB "alog with Dropdown Name= "DITAParser"', () => {
        cy.visit('http://localhost:5173/')
        cy.title().should("eq","PwC")
        cy.wait(1000)
        cy.xpath('//input[@id="login-username"]').type("ditaparserpwc@test.com")
        cy.xpath('//input[@id="login-password"]').type("meta@321")
        cy.get('button[type="submit"]').click()


        // To check FASB page Contain Logo of PwC
         cy.xpath("//img[@src='/assets/media/photos/pwc-logo.png']")

        //Test Case 2] To check FASB page contain Heading= "FASB"
        cy.xpath("//h3[text()=' FASB ']").contains("FASB")

        //Test Case 3] To check FASB page contain  Sub Heading = "Click here to select source files from FASB".
        cy.xpath("//p[text()=' Click here to select source files from FASB ']").contains("Click here to select source files from FASB ")
          cy.wait(1000)

          //Test Case 4] To check DITAParser dropdown having Heading ="DITAParser"
          cy.xpath('//span[text()="DITAParser"]').contains("DITAParser")
       cy.wait(1000)
           
      
     
         })
 
   
})