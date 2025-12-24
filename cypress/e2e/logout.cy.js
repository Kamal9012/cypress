// describe('To verify , the logout functionality',()=>{
//     it('login the page',()=>{
//         cy.visit('https://automationexercise.com/')
       
//         cy.get("a[href='/login']").should('be.visible').click()
//          cy.url().should('include', '/login')
//         cy.wait(2000)

//         cy.get('[data-qa="login-email"]').type('rajeshdai@gmail.com')
//         cy.get('[data-qa="login-password"]') .type('Admin@1234')
//         cy.get('[data-qa="login-button"]').click()
//         cy.url().should('include',"/")
//         cy.get('a[href="/logout"]').click()
//     })
        
//     //     it ('click on logout button',()=>{


//     //     cy.visit('https://automationexercise.com/')
//     //     cy.get('a[href="/logout"]').click()
//     //     cy.url().should('include', '/login')
//     //     // cy.visit('https://automationexercise.com/login')


//     // })

// })
describe('Logout functionality test', () => {

  beforeEach(() => {
    cy.visit('https://automationexercise.com/')

    cy.get("a[href='/login']").should('be.visible').click()
    cy.url().should('include', '/login')

    cy.get('[data-qa="login-email"]').type('rajeshdai@gmail.com')
    cy.get('[data-qa="login-password"]').type('Admin@1234')
    cy.get('[data-qa="login-button"]').click()

    cy.url().should('include', '/')
    cy.contains('Logged in as').should('be.visible')
  })

  it('User should logout and redirect to login page', () => {
    cy.get('a[href="/logout"]').should('be.visible').click()
    cy.url().should('include', '/login')
  })

})
