
describe('Orange HRM Login Functionality', () => {
    it('Login ', () => {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 
      cy.get("input[placeholder='Username']").type("Admin")
      cy.get("input[placeholder='Password']").type("admin123")
      cy.get(" button[type='submit']").click()
      cy.get("p[class='oxd-userdropdown-name']").contains("kjhshdc Collings")
      
      //Driver Functionality Check
      cy.get("button[role='none']").click()
      cy.xpath("//span[text()='Admin']").should('have.text','Admin')
     
    })
})

