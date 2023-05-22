describe('CheckBox Handling', () => {
     it('Locator', () => {
  
      
      cy.visit('https://accounts.google.com/signup')
     
       cy.get("input[type='checkbox']").check()
       cy.screenshot('CompletePage')
      cy.get('.VfPpkd-muHVFf-bMcfAe').uncheck()
      cy.screenshot('CompletePage')
     })

    
      })



