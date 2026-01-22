describe('Testing the homepage feature ', ()=>{
    beforeEach(() =>{
        cy.visit('https://automationexercise.com/',)
        cy.get("a[href='/login']").should('be.visible').click()
        cy.url().should('include', '/login')

       cy.get('[data-qa="login-email"]').type('rajeshdai@gmail.com')
       cy.get('[data-qa="login-password"]').type('Admin@1234')
       cy.get('[data-qa="login-button"]').click()
    })

  it('To click ,The category of women Cloth',()=>{
    cy.get('#Women').click()
    cy.get('[class="panel-body"]').should('have.length', 3)

  })
  it.skip('To click on women dresses ',() =>{
    cy.get('a[href="#Women"]').should('be.visible').click()
    cy.get('a[href="/category_products/1"]').should("be.visible").click()
    //cy.visit('https://automationexercise.com/category_products/1')
    cy.get('[class="product-image-wrapper"]').should('have.length', 3)

  })
  it.skip('To click on women Tops',() =>{
    cy.get('a[href="#Women"]').should('be.visible').click()
    cy.get('[href="/category_products/2"]').should('be.visible').click()
    //cy.visit('https://automationexercise.com/category_products/2')
    cy.get('[class="product-image-wrapper"]').should('have.length', 6)

  })
  it.skip('To click on women Sare',() =>{
    cy.get('a[href="#Women"]').should('be.visible').click()
    cy.get('a[href="/category_products/7"]').should('be.visible').click()
    //cy.visit('https://automationexercise.com/category_products/2')
    cy.get('[class="product-image-wrapper"]').should('have.length', 3)

  })
  it.skip('To test , The catefory of men cloth',() =>{
    cy.get('[href="#Men"]').should('be.visible').click()
    //cy.get('[class="panel-body"]').eq(2).should('have.length', 2)
  })
  it.skip('To test, The category of man t-shirt',()=>{
    cy.get('[href="#Men"]').should('be.visible').click()
    cy.get('a[href="/category_products/3"]').click()
    cy.get('[class="product-image-wrapper"]').should('have.length', 6)
  })
  it.skip('To test, the category of man jeans',() =>{
    cy.get('[href="#Men"]').should('be.visible').click()
    cy.get('a[href="/category_products/6"]').should('be.visible').click()
    cy.get('[class="product-image-wrapper"]').should('have.length', 3)
  })

  it('To test , The catefory of kid cloth',() =>{
    cy.get('[href="#Kids"]').should('be.visible').click()
    //cy.get('[class="panel-body"]').eq(2).should('have.length', 2)
  })
  it('To test, The category of kid t-shirt',()=>{
    cy.get('[href="#Kids"]').should('be.visible').click()
    cy.get('a[href="/category_products/4"]').click()
    cy.get('[class="product-image-wrapper"]').should('have.length', 3)
  })
  it('To test, the category of kids',() =>{
    cy.get('[href="#Kids"]').should('be.visible').click()
    cy.get('a[href="/category_products/5"]').should('be.visible').click()
    cy.get('[class="product-image-wrapper"]').should('have.length', 7)
  }) 
})

