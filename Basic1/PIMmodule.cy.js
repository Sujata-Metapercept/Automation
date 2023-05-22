import 'cypress-file-upload';
describe('Admin Module Testing', () => {
    it('Admin Module', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get(" button[type='submit']").click()
        //cy.wait(5000)
        cy.xpath("//span[text()='PIM']").click()
       // cy.wait(5000)
        //    cy.get(".oxd-icon.bi-chevron-down").click()
        //    cy.wait(5000)
        //    cy.get(".oxd-topbar-body-nav-tab-link").contains("Data Import").click()
        //    cy.wait(5000)
        //    cy.get(".oxd-text.oxd-text--p.orangehrm-main-title").contains('Data Import')
        //    cy.wait(5000)
        //    cy.get(".oxd-icon.bi-upload.oxd-file-input-icon").click()
        //    cy.wait(5000)
        //cy.get("//input[@type='checkbox'])"[1])
        cy.xpath("//button[normalize-space()='Add']").click()
        cy.xpath("//h6[text()='Add Employee']").should('have.text', 'Add Employee')
cy.get("input[placeholder='First Name']").type("Anna")
cy.get("input[placeholder='Middle Name']").type("ayyan")
cy.get("input[placeholder='Last Name']").type("aranee")
cy.wait(5000)

cy.get(" button[type='submit']").click()
cy.wait(5000)
cy.xpath("//div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']//div[1]//div[2]//div[1]//div[1]//div[2]//input[1]").type("abc")
cy.xpath("//div[@class='orangehrm-horizontal-padding orangehrm-vertical-padding']//div[1]//div[2]//div[1]//div[1]//div[2]//input[1]").type("123")
    })
})

