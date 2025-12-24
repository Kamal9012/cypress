describe('Testing the homepage feature ', ()=>{
    beforeEach(() =>{
        cy.visit('https://automationexercise.com/')
        cy.get("a[href='/login']").should('be.visible').click()
        cy.url().should('include', '/login')

       cy.get('[data-qa="login-email"]').type('rajeshdai@gmail.com')
       cy.get('[data-qa="login-password"]').type('Admin@1234')
       cy.get('[data-qa="login-button"]').click()
       

       it('To Test, The banner of homepage ' , ()=>{
        cy.url(),should('include','/')
        cy.get('#slider').should('be.visible')


       })


    })
})