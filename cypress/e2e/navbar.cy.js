describe('Testing the Divbar feature ', ()=>{
    beforeEach(() =>{
        cy.visit('https://automationexercise.com/',)
        cy.get("a[href='/login']").should('be.visible').click()
        cy.url().should('include', '/login')

       cy.get('[data-qa="login-email"]').type('rajeshdai@gmail.com')
       cy.get('[data-qa="login-password"]').type('Admin@1234')
       cy.get('[data-qa="login-button"]').click()
    })

   it.skip('To test , All tha button should be display on divBar',()=>{
    cy.get('[src="/static/images/home/logo.png"]').should('be.visible')
    cy.get('[class="col-sm-8"]').should('be.visible')
    
   })
   it.skip('To test , All tha button should be display on divBar',()=>{
    cy.get('[src="/static/images/home/logo.png"]').should('be.visible')
    cy.get('[class="col-sm-8"]').should('be.visible')
    
   })

   it.skip('To test , The homepage button functionality',()=>{
    // cy.get('[href="/"]').should('have.length', 1)
    cy.get('[href="/"]').eq(1).should('be.visible').click()
    //cy.get('[class="col-sm-8"]').should('be.visible')
    
   })
   it.skip('To test , The Products button functionality',()=>{
    cy.get('[href="/products"]').should('be.visible').click()
    cy.get('#sale_image').should('be.visible')
    cy.get('[class="title text-center"]').should('be.visible')
    cy.get('[class="product-image-wrapper"]').should('have.length', 34)
    cy.get('#search_product').should('be.visible')
    cy.get('#submit_search').should('be.visible')
    cy.get('[class="left-sidebar"]').should('be.visible')

   })
   it.skip('To test, The Carts button functionlity',()=>{
    cy.get('[href="/view_cart"]').eq(1).click()
    cy.get('[class="cart_menu"]').eq(1).should('be.visible')
    cy.get('[class="image"]').should('have.length', 5)
    cy.get('[class="image"]').contains('Item').should('be.visible')
    cy.get('[class="image"]').contains('Description').should('be.visible')
    cy.get('[class="image"]').contains('Price').should('be.visible')
    cy.get('[class="image"]').contains('Quantity').should('be.visible')
    cy.get('[class="image"]').contains('Total').should('be.visible')


   })
   //File handling
   
    it('To test, the contact button functionality',()=>{
    cy.get('[href="/contact_us"]').should('be.visible').click()
    cy.get('[class="contact-form"]').should('be.visible')
    cy.get('[name="name"]').should('be.visible').type('Kamal thapa')
    cy.get('[class="form-control"]').eq(1).should('be.visible')
    cy.get('[class="form-control"]').eq(1).type('kamal thapa@gmail.com')
    cy.get('[name="subject"]').should('be.visible').type('Automation testing')
    cy.get('[id="message"]').should('be.visible').type('write message you have !!!!!!...')
    cy.get('[type="file"]').selectFile('cypress/documents/test1.jpg')
    cy.get('[name="submit"]').click()
    cy.get('[class="status alert alert-success"]').should('be.visible')
    cy.get('[class="contact-info"]').should('be.visible')
    cy.get('[href="mailto:feedback@automationexercise.com"]').should('be.visible').click()





   })


   it('To test, the video tutorials  ', ()=>{
    cy.get('[href="https://www.youtube.com/c/AutomationExercise"]').should('be.visible').click()
    // cy.get('[class="ytCoreImageHost ytCoreImageFillParentHeight ytCoreImageFillParentWidth ytCoreImageContentModeScaleAspectFill ytCoreImageLoaded"]').eq(1).click()
   })

  


   it('To test, The Test cases button functionlity',()=>{
    cy.get('[href="/test_cases"]').eq(1).click()
    cy.get('[class="col-sm-9 col-sm-offset-1"]').should('be.visible')
    cy.get('[class="panel-group"]').should('have.length', 27)
    cy.get('[href="#collapse1"]').should('be.visible').click()
    cy.get('[class="list-group"]').should('be.visible')


    cy.get('#collapse2.panel-collapse.collapse').then($panel => {
      if ($panel.css('display') === 'none') {
        cy.get($panel).parent().find('.panel-heading').click()
      }
    })

    // Now check the first 18 items
   cy.get('[class="list-group-item"]').each((index) => {
      if (index < 18) {
    
      }
   })
   cy.get('[href="#collapse1"]').should('be.visible').click()



   cy.get('#collapse3.panel-collapse.collapse').then($panel => {
      if ($panel.css('display') === 'none') {
        cy.get($panel).parent().find('.panel-heading').click()
      }
    })
   


   cy.get('[href="#collapse2"]').should('be.visible').click()
   cy.get('[class="list-group"]').should('be.visible')
   cy.get('[class="list-group-item"]').each((index) => {
      if (index >= 17 && index <= 27) {
    
      }
   })

   cy.get('#collapse4.panel-collapse.collapse').then($panel => {
      if ($panel.css('display') === 'none') {
        cy.get($panel).parent().find('.panel-heading').click()
      }
    })



    cy.get('[href="#collapse3"]').should('be.visible').click()
    cy.get('[class="list-group"]').should('be.visible')
    cy.get('[class="list-group-item"]').each((index) => {
      if (index >= 27 && index <= 35) {
    
      }
   })

   cy.get('#collapse5.panel-collapse.collapse').then($panel => {
      if ($panel.css('display') === 'none') {
        cy.get($panel).parent().find('.panel-heading').click()
      }
    })





     cy.get('[href="#collapse4"]').should('be.visible').click()
    cy.get('[class="list-group"]').should('be.visible')
    cy.get('[class="list-group-item"]').each((index) => {
      if (index >= 35 && index <= 45) {
    
      }
   })



   cy.get('#collapse6.panel-collapse.collapse').then($panel => {
      if ($panel.css('display') === 'none') {
        cy.get($panel).parent().find('.panel-heading').click()
      }
    })





    cy.get('[href="#collapse5"]').should('be.visible').click()
    cy.get('[class="list-group"]').should('be.visible')
    cy.get('[class="list-group-item"]').each((index) => {
      if (index >= 45 && index <= 54) {
        //cy.wrap($el).should('be.visible')
      }
   })


    cy.get('[class="panel panel-default"]').should('be.visible')
    cy.get('[href="mailto:feedback@automationexercise.com"]').should('be.visible').click()

 
   })
   
   

  })
