

describe('Css Locator and Xpath Locator', () => {
  it('Locator', () => {

    //Login To OrangeHrm Application
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get("input[name='username']").type("Admin")     // class
    cy.get("input[name='password']").type("admin123")
    cy.get("button[type='submit' ]").click()


    cy.get("p[class='oxd-userdropdown-name']").contains("Paul Collings")// assertion
    // cy.get("//p[text()='Paul Collings ']").contains("first last")()


    // for Admin Module
    /*cy.xpath("//span[text()='Admin']").click()
    
    cy.xpath("//button[text()=' Add ']").click()
    cy.get("span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").click().select("Admin")
    cy.get("//div[text()='-- Select --']").select('Admin').
    cy.get()
    cy.xpath("").click()*/


    //PIM Modules

    cy.xpath("//span[text()='PIM']").click()
    cy.get("p[class='oxd-userdropdown-name']").contains("Paul Collings")
    cy.get("//input[@type='checkbox'])"[1])
    //cy.xpath("//button[text()=' Add ']").click()
    //cy.get('i[class="oxd-icon bi-check oxd-checkbox-input-icon]').first().check()

    //cy.xpath("//input[@placeholder='First Name']").type("Sujata")
    //cy.xpath("//button [@type='submit']").click()



    /*cy.xpath("//button[text()=' Add ']").click()
    cy.xpath("//input[@placeholder='First Name' ]").type("Sujata")
    cy.xpath("//input[@name='middleName' ]").type("Dattatraya")
    cy.xpath("//input[@name='lastName' ]").type("Sumbare")

    cy.xpath("//button [@type='submit']").click()*/


  })
})
