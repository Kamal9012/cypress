describe('Testing the homepage feature ', ()=>{
    beforeEach(() =>{
        cy.visit('https://automationexercise.com/')
        cy.get("a[href='/login']").should('be.visible').click()
        cy.url().should('include', '/login')

       cy.get('[data-qa="login-email"]').type('rajeshdai@gmail.com')
       cy.get('[data-qa="login-password"]').type('Admin@1234')
       cy.get('[data-qa="login-button"]').click()
    })

  it('To click ,The category of women icon button',()=>{
    cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click()

  })
  it('To click on women dresses ',() =>{
    cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click()
    cy.visit('https://automationexercise.com/category_products/1')
  })
})
