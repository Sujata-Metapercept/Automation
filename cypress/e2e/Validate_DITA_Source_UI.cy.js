
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
        // Test Case 1] To check Valiadte DITA Source contain "File Input" field to choose a file along with Proceed Button
        cy.xpath('//label[text()="File Input(Shoud be in zip format)"]').contains("Shoud be in zip format")
        cy.get('input[id=example-file-input]')
        // Test Case2] To check Proceed button contain name should be like "Proceed" background color=rgba(0, 0, 0, 0)
        cy.xpath('//button[text()=" Proceed "]').contains("Proceed")
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)')
            .should('have.css', 'background-color')
            .and('eq', 'rgba(0, 0, 0, 0)')

        //  Test Case3]To chek Element validation field contain Validate Button color='rgb(234, 88, 12)'
        cy.xpath('//h6[text()="Element Validation"]').contains('Element Validation')

        // To check validate button
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > button:nth-child(1)')
            .should('have.css', 'background-color')
            .and('eq', 'rgb(234, 88, 12)')

        // Test Case 4] To check Attribute Validation field contain Valiadte Button bg color=
        cy.xpath('//h6[text()="Attribute Validation"]').contains('Attribute Validation')
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > button:nth-child(1)')
            .should('have.css', 'background-color')
            .and('eq', 'rgb(234, 88, 12)')


        // TestCase 5] To check Next Button Should be like "Next" color=rgb(220, 38, 38)' 
        cy.get('button[class="btn btn-danger rounded-0"]').contains("Next")
            .should('have.css', 'background-color')
            .and('eq', 'rgb(220, 38, 38)')
        // Test Case 6] To check  Reset Button Should be like "Reset" color= ""
        cy.get('button[class="btn btn-danger rounded-0"]').contains("Next")
            .should('have.css', 'background-color')
            .and('eq', 'rgb(220, 38, 38)')
    })

})






