describe('File Downloading', () => {
    it('To Download the file and save in folder', () => {
     cy.visit("http://autopract.com/selenium/download.html") 
     cy.wait(5000)

    cy.get(".mydownload").click()
    cy.wait(5000)
    //cy.get("#download").click()
    cy.wait(5000)

    cy.wait(4000).click();
    cy.get("button").click(); 
    cy.downloadFile('http://autopract.com/selenium/image.jpeg?','cypress/downloads','file.jpg') 
     
    })
})