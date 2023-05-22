import 'cypress-file-upload';
describe('Valiadte DITA Source GUI Testing ', () => {

    it('Test Scenario 1] To check All the GUI Element should be align proprly on Validate DITA Source  Field', () => {
        cy.visit('http://localhost:5173/')
        cy.title().should("eq", "PwC")
        cy.wait(1000)
        cy.xpath('//input[@id="login-username"]').type("ditaparserpwc@test.com")
        cy.xpath('//input[@id="login-password"]').type("meta@321")
        cy.get('button[type="submit"]').click()
        cy.wait(2000)
        cy.xpath('//h3[text()=" FASB "]').click()
        cy.xpath('//button[@id="DocTypeValiBtn"]').contains("Validate DocType")
        cy.xpath('//button[text()=" Next "]').click()
        cy.wait(5000)

        // Test Case 1] To check  Choose A File Funtionality should able to choose a file from Desktop
        cy.get('input[id=example-file-input]').attachFile('Access.Png')
        // Test Case2] To Click Proceed Button tpo convert zip file to unzip 
        cy.xpath('//button[text()=" Proceed "]').contains("Proceed").click()
        cy.wait(5000)

        //  Test Case 3] To check validate button Functionality for Element Validation
        cy.xpath('(//button[text()=" Validate "]/..)[1]')
            .click()

        //To check User should able to get a message "Element Validation In Process"
        cy.xpath('//h5[text()="Element Validation In Process"]').contains("Element Validation In Process")
        cy.wait(8000)


        // Test Case 4] To check Valiadte Button functionality for Attribute Validation 
        cy.xpath('(//button[text()=" Validate "]/..)[2]')
            .click()

        // To check User should able to get a message "Element Validation In Process" 
        cy.xpath('//h5[text()="Attribute Validation In Process"]').contains("Attribute Validation In Process")
        cy.wait(5000)

        //TestCase 5] To check Next Button  Functionality
        cy.get('button[class="btn btn-danger rounded-0"]').contains("Next")
            .click()

        /* Test Case 6] To check  Reset Button Functionality 
    cy.get('button[class="btn btn-secondary rounded-0"]').click()*/
    })

})






