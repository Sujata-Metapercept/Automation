describe('My First Test', () => {


    it('Test1-Verify title-positive Test', () =>  
    {
      // Step
      cy.visit("https://www.google.com/")
      cy.title().should("eq","Google")
    })
    
    it('Test2-Verify title-negaive Test', () =>  
    {
      // Step
      cy.visit("https://www.google.com/")
      cy.title().should("eq","Google123456")
    })
  })  