
// To rmove the targer  we useed the invoke method
//cypress doesnot handled the tab automatically

describe('Tab Handling', function () {
    //test case
    it('To handle Tab using invoke method', function (){
       // url launch
       cy.visit("https://the-internet.herokuapp.com/windows")
       // delete target attribute with invoke method
       cy.get('#content > div > a').invoke('removeAttr','target').click()
       cy.wait(5000)
       cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

      // to perform the operation
      //go back to parent tab
      cy.go('back')


    }) 


 
   // test Scenario 2
   it('Approch 2  To handle Tab using href method ', function (){
      // launch the application
      cy.visit("https://the-internet.herokuapp.com/windows");
      // grab the href prop with prop() JQuery method
      cy.get('#content > div > a').then((e)=>{
         const url = e.prop('href');
         // get the url in logs
        // cy.log(txt);
         // launch the url again
         cy.visit(url)
         cy.url().should('contain','https://the-internet.herokuapp.com/windows/new')

      })
   });
});


   

 