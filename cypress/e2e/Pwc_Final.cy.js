import 'cypress-file-upload';
describe('To  Check Pwc Overall Functionality', () => {

    it('Test Scenario 1] To check Working of Pwc ', () => {
        // To login the Application with valid credential
        cy.visit('http://localhost:5173/')
        cy.title().should("eq", "PwC")
        cy.wait(8000)

        cy.xpath('//input[@id="login-username"]').type("ditaparserpwc@test.com")
        cy.xpath('//input[@id="login-password"]').type("meta@321")
        cy.get('button[type="submit"]').click()
        cy.wait(8000)

        // To check the  "Valiate DocType" Field functionality 
        cy.xpath('//h3[text()=" FASB "]').click()
        cy.xpath('//button[@id="DocTypeValiBtn"]').contains("Validate DocType")
        cy.xpath('//button[text()=" Next "]').click()
        cy.wait(8000)

        /* To check the "Valliadte DITA Source" Field functionality to Select the file to click Proceed Button To did Element Validation  and Attribute Validation if Required
        By clicking Validate Button , To check "Reset" and  "Next" Buttoon functionality */
        cy.get('input[id=example-file-input]').attachFile('FASB_Section_General_Notes (1).zip')
        cy.xpath('//button[text()=" Proceed "]').contains("Proceed").click()
        cy.wait(8000)
        cy.xpath('(//button[text()=" Validate "]/..)[1]')
            .click()
        cy.wait(8000)
        cy.xpath('(//button[text()=" Validate "]/..)[2]')
            .click()
        cy.wait(8000)
        cy.get('button[class="btn btn-danger rounded-0"]').click()
        cy.wait(8000)

        //  To Check Output Field functionality To click Run Script to Download the log and Download the  DITA File, also check   the file is downloaded or not?
        cy.get('#ScriptRunBtn')
        cy.xpath('//button[text()=" Run Script " ]').click()
        cy.xpath('//h5[text()="In process for next step"]').contains("In process for next step")
        cy.wait(8000)
        // cy.xpath ('//button[text()=" Download Log "]').click()
        //cy.verifyDownload('log.zip');
        cy.xpath('//button[text()=" Download DITA "]').click()
        // cy.downloadFile('http://localhost:5173/fasb/uploadfile?','cypress/downloads','ditasource.zip') 
        // To check Download file is present in Download folder
        cy.verifyDownload('ditasource.zip');
        cy.verifyDownload('.zip', { contains: true });
        cy.wait(8000)

// To check  Logout Functionality
        cy.xpath('//span[text()="DITAParser"]').click()
        cy.wait(8000)
        cy.xpath ('//span[text()="Log Out"]').click().url("http://localhost:5173/auth/signin3")

    })

})






