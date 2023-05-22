import 'cypress-iframe'
/// <reference types="cypress" />

//What is Frame- A Frame contain the set of information
describe('Handling Frame ', () => {
    it('Frame Approch1', () => {
      cy.visit("https://jqueryui.com/draggable/")
     cy.frameLoaded(".demo-frame")
     cy.iframe().find('#draggable').then(function(res){
const frmValue=res.text()
expect(frmValue).to.equal('\n\tDrag me around\n')     })
    })
})

