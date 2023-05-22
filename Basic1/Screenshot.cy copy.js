describe('ScreenShot', function () {
    // test case
    it("To take a screenshot of complete page", function () {
       //URL launched
       cy.visit("https://www.google.com")
       //complete page screenshot with filename - CompletePage
       cy.screenshot('CompletePage')
       
    });
    it("To take a screenshot of particular Element", function () {
        //URL launched
        cy.visit("https://www.google.com")
        //complete page screenshot with filename - CompletePage
        cy.screenshot('CompletePage')
        cy.get("a[aria-label='Gmail (opens a new tab)']").screenshot()
        
     });
 });