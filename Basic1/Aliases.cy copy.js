describe('element', () => {
    beforeEach(() => {
       cy.wrap('eleone').as('x')
    })
    context('subelement', () => {
       beforeEach(() => {
          cy.wrap('eletwo').as('y')
       })
          it('aliases properties', function () {
             expect(this.x).to.eq(' eleone ')
             expect(this.y).to.eq(' eleone ')
          })
       })
    })
