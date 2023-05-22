import 'cypress-file-upload';
describe('Outut UI and Functional Testing ', () => {

    it('Test Scenario 1] To check All the GUI Element should be align proprly on Output Field and should work properly', () => {
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
        cy.get('input[id=example-file-input]').attachFile('FASB_Section_General_Notes (1).zip')
        cy.xpath('//button[text()=" Proceed "]').contains("Proceed").click()
        cy.wait(5000)
        cy.xpath('(//button[text()=" Validate "]/..)[1]')
            .click()
        cy.wait(5000)
        cy.xpath('(//button[text()=" Validate "]/..)[2]')
            .click()
        cy.wait(5000)
        cy.get('button[class="btn btn-danger rounded-0"]').click()

        //  Test Case 1] To check Output Button should be  like "Output" contain color =rgb(234, 88, 12)')
        cy.get('#ScriptRunBtn')
            .should('have.css', 'background-color')
            .and('eq', 'rgb(224, 48, 30)')
        //  Test Case 2] To check The Run Script Button should contain color=
        cy.xpath('//button[text()=" Run Script " ]').should('have.css', 'background-color')
            .and('eq', 'rgb(234, 88, 12)')

        //  Test Cse 3] To click Run Script Button  user should able to navigate next page to Download the log and download the DITA file
        cy.xpath('//button[text()=" Run Script " ]').click()
        //  TwstCase 4] To check user should able to get popup with message "In process for next step"
        cy.xpath('//h5[text()="In process for next step"]').contains("In process for next step")
        cy.wait(3000)


        // Test Case 5] To chek User should able to downlaod the generated log by clicking on "Download log" button
        // cy.xpath ('//button[text()=" Download Log "]').click()
        //cy.verifyDownload('log.zip');


        // TestCase 6] To check User should able to downlaod the generated DITA File by clicking on "Download  DITA" button
        cy.xpath('//button[text()=" Download DITA "]').click()
        // cy.downloadFile('http://localhost:5173/fasb/uploadfile?','cypress/downloads','ditasource.zip') 
        // To check Download file is present in Download folder
        cy.verifyDownload('ditasource.zip');
        cy.verifyDownload('.zip', { contains: true });


    })

})






