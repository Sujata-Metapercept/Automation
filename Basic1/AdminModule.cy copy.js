
describe('Admin Module Testing', () => {
    it('Admin Module', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get(" button[type='submit']").click()
        cy.wait(5000)
        cy.xpath("//span[text()='Admin']").click()
       // cy.wait(5000)
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click()
       //cy.get(".oxd-text.oxd-text--h6.orangehrm-main-title").should('have.text','Add User')
        //cy.wait(5000)
        //cy.xpath("//div[@class='oxd-grid-2 orangehrm-full-width-grid']//div[1]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").first().click().select('Admin')
        //cy.xpath("//div[contains(text(),'Admin')]").click()
        cy.xpath("//div[@class='oxd-grid-2 orangehrm-full-width-grid']//div[1]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click()
       cy.get("div[class='oxd-select-text oxd-select-text--active oxd-select-text--error'] div[class='oxd-select-text-input']").contains(" -'-- Select ---- Select --'")
    })
})
 
