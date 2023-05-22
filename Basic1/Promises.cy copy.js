describe('Tutorialspoint Test', function () {
    it('Promise', function (){
       return cy.visit('https://accounts.google.com')
       .then(() => {
          return cy.get('h1#heading');
       })
    })
 })