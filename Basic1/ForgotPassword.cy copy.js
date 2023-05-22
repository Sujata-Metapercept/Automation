describe('Forgot Password', () => {
    it('To Check Forgot Password Functionality', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header").click()
        cy.xpath("//h6[normalize-space()='Reset Password']").should('have.text', 'Reset Password')
        cy.get("p[class='oxd-text oxd-text--p']").should('have.text', 'Please enter your username to identify your account to reset your password')
        // To Verify the CopyRight Content
        cy.xpath("//a[normalize-space()='OrangeHRM, Inc']").should('have.text','OrangeHRM, Inc')
        //Reset Password Button
        // cy.get("input[placeholder='Username']").type("Admin")
        // cy.get(" button[type='submit']").click()
        // cy.get(".oxd-text.oxd-text--h6.orangehrm-forgot-password-title").contains('Reset Password link sent successfully')

        // Cancel Button
        cy.get("button[type='button']").click()
        cy.url().should('contain','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


    })
})