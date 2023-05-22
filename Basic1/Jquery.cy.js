// test suite
describe('Jquery', function () {
    // it function to identify test
       it('Jquery and its working ', function (){
          // test step to launch a URL
          cy.visit("https://accounts.google.com")
          // access web element with Cypress.$
          cy.request('/').get('h1#headingText').then(function(e){
             Cypress.$(e).find('span')
             const t = e.text()
             cy.log(t)
          })
       })
    })

  