describe('Testing the homepage feature ', ()=>{
    beforeEach(() =>{
        cy.visit('https://automationexercise.com/',)
        cy.get("a[href='/login']").should('be.visible').click()
        cy.url().should('include', '/login')

       cy.get('[data-qa="login-email"]').type('rajeshdai@gmail.com')
       cy.get('[data-qa="login-password"]').type('Admin@1234')
       cy.get('[data-qa="login-button"]').click()
    })
 it('To test , the footer of the page',()=>{
    cy.get('#footer').should('be.visible')
    cy.get('[class="footer-bottom"]').should('be.visible')
    cy.contains('Copyright © 2021 All rights reserved').should('be.visible')

    cy.get('[class="searchform"]').scrollIntoView()
    cy.get('#susbscribe_email').should('be.visible').type('rajeshdai@gmail.com').wait(100)
    cy.get('#subscribe').click()
    cy.get('[href="#top"]').should('be.visible').click()
 })
})