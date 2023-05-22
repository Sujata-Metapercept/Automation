// describe('Amazon Website Testing', () => {
//     it('Locator', () => {
//       cy.visit("https://www.amazon.in")
//       //cy.get('select').select('Alexa Skills')
//      // cy.get('select').select(0).should('Alexa Skills')
//       cy.get("select[id='searchDropdownBox']").select()

      
     
//     })
// })
 
describe('Tutorialspoint Test', function () {
  // test case
  it('Test Case1', function (){
     // test step to launch a URL
     cy.visit("https://www.tutorialspoint.com/videotutorials/index.php");
     // enter test in the dynamic dropdown
     cy.get("#search-strings").type("Java");
     // wait for some time
     cy.wait(3000);
     // assertion to validate the number of search results
     cy.get('.clsHeadQuestion'). should('have.length',19);
     // iterate through the suggested options
     cy.get('.clsHeadQuestion').each(($el, index, $list) => {
        // condition matching check
        if($el.text() ==="Java"){
           // click() on that option for selection
           $el.click();
        }
     })
     // assertion to check if correct option is selected
     cy.get("#search-strings").should("have.value","Java");
  });
});