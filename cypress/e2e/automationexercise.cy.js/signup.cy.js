describe('Automation Exercise - Click on signup button', () => {
beforeEach(() =>{
  cy.visit('https://automationexercise.com/')
})
  it('To test , The click on signup button clickable  ', () => {
    cy.get("a[href='/login']").should('be.visible').click()
    cy.url().should('include', '/login')
    cy.wait(2000)
    
  })
 it('To test,The signup functionality ',() =>{
  
  cy.get("a[href='/login']").click()
    cy.url().should('include', '/login')

  cy.get("input[placeholder='Name']", { timeout: 10000 })
  .type(' Rajesh dai nepal')

  cy.get("input[data-qa='signup-email']").type('rajeshdainepal11@gmail.com')
  
  cy.get("button[data-qa='signup-button']").should('be.visible').and ('not.be.disabled').click()

  cy.url().should('include','/signup')

  // handling the checkbox  between gender
  
  cy.get('input[name="title"]').check('Mr')

  cy.get('input[value="Mr"]').should('be.checked')

  cy.get('#id_gender1').should('be.checked')

  cy.get('#id_gender2').should('not.be.checked')


  cy.get('#password').should('be.visible').type('Admin@1234')


// handling the dropdown of date 
  cy.get('#days').should('be.visible').select('4')
  cy.get('#months').should('be.visible').select('9')
  cy.get('#years').should('be.visible').select('2020')


  // click on checkbox
  cy.get('#newsletter').should("be.visible").check()
  cy.get('#optin').should('be.visible').check()

  cy.get('#first_name').type('kamal')
  cy.get('#last_name').type('adhakari')
  cy.get('#company').type('Nitv nepal')
  cy.get('#address1').type('kathmandu')
  cy.get('#address2').type('kathmandu')
  cy.get('#country').select('Canada')
  cy.get('#state').type('bagmati')
  cy.get('#city').type('kathmandu')
  cy.get('#zipcode').type("100002")
  cy.get('#mobile_number').type('9876747732')
  cy.get("button[data-qa='create-account']").click()


 })
it('To test the conformation page',  ()=> {


 cy.visit('https://automationexercise.com/account_created')
 cy.get('[class="btn btn-primary"]').click()
 })

  
})
