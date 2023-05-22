import 'cypress-file-upload';
describe('File Upload ', function () {
    //test case
    it('Normal Approch for File Uploading', function () {
        //file to be uploaded path in project folder

        // launch URL
        cy.visit("https://the-internet.herokuapp.com/upload")
        //upload file with attachFile method 
        cy.get('#file-upload').attachFile('Access.Png')
        //click on upload
        cy.get('#file-submit').click()
        cy.wait(5000)
        //verify uploaded file
        cy.get('#uploaded-files').contains('Access')
        cy.get("#content > div > h3").should('have.text', 'File Uploaded!')
    })



        //At the time of uploading Rename the file

        it('Rename the file while Uploading', function (){
            //file to be uploaded path in project folder

            // launch URL
            cy.visit("https://the-internet.herokuapp.com/upload")
            //upload file with attachFile method 
            cy.get('#file-upload').attachFile({filePath:'Access.Png',fileName:'MyFile.pdf'})
            //click on upload

           cy.get('#file-submit').click()
            cy.wait(5000)
            //verify uploaded file
            cy.get('#uploaded-files').contains('MyFile')
            cy.get("#content > div > h3").should('have.text','File Uploaded!')
        })

       // Perfoeming Drag and Drop Approch
        it('Drag and Droup file uploading', function (){
        cy.visit("https://the-internet.herokuapp.com/upload")
            //upload file with attachFile method 
            cy.get('#drag-drop-upload').attachFile("checkbox.html",{subjectType:'drag-n-drop'})

            cy.wait(5000)
            cy.get("#drag-drop-upload").should('have.text','\n\n    \n      checkbox.html\n    \n    ✔\n  ')
            cy.wait(5000)
            //click on upload
           cy.get('#file-submit').click()
            cy.wait(5000)
            //verify uploaded file
           // cy.get('#uploaded-files').contain('checkbox')
        })

           // To Upload multiple file at a time

        it('Uploading Multiple File', function () {
            //file to be uploaded path in project folder

            // launch URL
            cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
            //upload file with attachFile method 
            cy.get('#filesToUpload').attachFile(['checkbox.html', "Access.png"])
            cy.wait(5000)
            //click on upload

            //to check asertion
            cy.get('#main > div > p:nth-child(6) > strong').should('have.text', 'Files You Selected:')
            // cy.get("#content > div > h3").should('have.text','File Uploaded!')


            

        });
    });
