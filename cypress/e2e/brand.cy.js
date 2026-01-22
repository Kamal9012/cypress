describe('Testing the homepage feature ', ()=>{
    beforeEach(() =>{
        cy.visit('https://automationexercise.com/',)
        cy.get("a[href='/login']").should('be.visible').click()
        cy.url().should('include', '/login')

       cy.get('[data-qa="login-email"]').type('rajeshdai@gmail.com')
       cy.get('[data-qa="login-password"]').type('Admin@1234')
       cy.get('[data-qa="login-button"]').click()
    })

  it('To click ,The polo brand cloths',()=>{
    cy.get('[href="/brand_products/Polo"]').click()
    cy.get('[class="product-image-wrapper"]').should('have.length', 6)
    

  })


  it('To click ,The H&M brand cloths',()=>{
    cy.get('[href="/brand_products/H&M"]').click()
    cy.get('[class="product-image-wrapper"]').should('have.length', 5)
  })



    it('To click ,The MADAME brand cloths',()=>{
    cy.get('[href="/brand_products/Madame"]').click()
    cy.get('[class="product-image-wrapper"]').should('have.length', 5)
    })



    it('To click ,The MAST & HARBOUR brand cloths',()=>{
    cy.get('[href="/brand_products/Mast & Harbour"]').click()
    cy.get('[class="product-image-wrapper"]').should('have.length', 3)
    })



    it('To click ,The Babyhug brand cloths',()=>{
    cy.get('[href="/brand_products/Babyhug"]').click()
    cy.get('[class="product-image-wrapper"]').should('have.length', 4)
    })



    it('To click ,The Allen Solly Junior brand cloths',()=>{
    cy.get('[href="/brand_products/Allen Solly Junior"]').click()
    cy.get('[class="product-image-wrapper"]').should('have.length', 3)
    })


    it('To click ,The polo brand cloths',()=>{
    cy.get('[href="/brand_products/Kookie Kids"]').click()
    cy.get('[class="product-image-wrapper"]').should('have.length', 3)
    })


     it('To click ,The polo brand cloths',()=>{
    cy.get('[href="/brand_products/Biba"]').click()
    cy.get('[class="title text-center"]').should('be.visible')
    cy.get('[class="product-image-wrapper"]').should('have.length', 5)
    })
})