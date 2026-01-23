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
   it('To test, The Carts button functionlity',()=>{
    cy.get('[href="/view_cart"]').should('be.visible').click()
    cy.get('[class="cart_menu"]').should('be.visible')
    cy.get('[class="image"]').contains('Item').should('be.visible')


   })

  })
