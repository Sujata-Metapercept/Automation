describe('PWC Login Functionality', () => {

    it('Test Scenario 1] To check User should able to successfully sign In in PWC with Valid Credential', () => {
        cy.visit('http://localhost:5173/')
        cy.title().should("eq", "PwC")
        cy.wait(1000)
        //Test Case 1] To  Enter  Valid Email Adress and Valid Password
        cy.xpath('//input[@id="login-username"]').type("ditaparserpwc@test.com")
        cy.xpath('//input[@id="login-password"]').type("meta@321")
        cy.get('button[type="submit"]').click()
        cy.url().should("eq", "http://localhost:5173/backend/dashboard")

        cy.wait(5000)



    })

    //Test Case 2] To  Enter  IValid Email Adress and InValid Password

    it('Test Scenario 2] To  Enter Valid Email Address and Invalid Password  User should able to get an Error Message ', () => {
        cy.visit('http://localhost:5173/')
        cy.title().should("eq", "PwC")
        cy.wait(3000)
        //To  Enter  Valid Email Adress and InValid Password

        cy.xpath('//input[@id="login-username"]').type("ditaparserpwc@test.com")
        cy.xpath('//input[@id="login-password"]').type("meta@331")
        // cy.wait(3000)
        cy.get('button[type="submit"]').click()

        cy.xpath('//div[@role="alert"]')
        cy.wait(3000)

    })


    //Test Case 3] To  Enter  IValid Email Adress and InValid Password

    it('Test Scenario 3] To  Enter InValid Email Address and valid Password  User should able to get an Error Message ', () => {
        cy.visit('http://localhost:5173/')
        cy.title().should("eq", "PwC")
        cy.wait(3000)

        //To  Enter  InValid Email Adress and Valid Password

        cy.xpath('//input[@id="login-username"]').type("ditaparserpwc@test.com")
        cy.xpath('//input[@id="login-password"]').type("meta@3211")
        cy.wait(3000)
        cy.get('button[type="submit"]').click()
        cy.wait(3000)


    })

    //Test Case 4] To  Enter  IValid Email Adress and InValid Password

    it('Test Scenario 4] To  Enter InValid Email Address and Invalid Password  User should able to get an Error Message ', () => {
        cy.visit('http://localhost:5173/')
        cy.title().should("eq", "PwC")
        cy.wait(3000)

        //To  Enter  InValid Email Adress and InValid Password

        cy.xpath('//input[@id="login-username"]').type("ditaparserpwc@test.co")
        cy.xpath('//input[@id="login-password"]').type("meta@3211")
        cy.wait(3000)
        cy.get('button[type="submit"]').click()

    })


})