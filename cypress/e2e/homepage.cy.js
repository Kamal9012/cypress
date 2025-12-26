describe('Testing the homepage feature ', ()=>{
    beforeEach(() =>{
        cy.visit('https://automationexercise.com/')
        cy.get("a[href='/login']").should('be.visible').click()
        cy.url().should('include', '/login')

       cy.get('[data-qa="login-email"]').type('rajeshdai@gmail.com')
       cy.get('[data-qa="login-password"]').type('Admin@1234')
       cy.get('[data-qa="login-button"]').click()
    })

       it('To Test, The banner of homepage ' , ()=>{
        cy.url().should('include','/')
        cy.get('#slider').should('be.visible')
        cy.get('[class="left control-carousel hidden-xs"]').should('be.visible').then(($btn)=>{
            for (let i = 0; i < 3; i++) {
            cy.wrap($btn).click()
            }

        }) 
        cy.get('[class="right control-carousel hidden-xs"]').should('be.visible').then(($btn)=>{
            for (let i = 0; i < 3; i++) {
            cy.wrap($btn).click()
            }

        }) 
        cy.get('[class="productinfo text-center"]').should('have.length', 40)
        cy.get('[id="accordian"]').should('be.visible')
        // cy.get('[href="#Women"]').should('be.visible').click()
        })
     it('To test, View the product', ()=>{
        cy.get('a[href="/product_details/39"]').click()
        cy.url().should('include','/product_details/39')
        cy.get('[class="newarrival"]').should('be.visible')
        cy.get("div[class='product-information'] h2").should('be.visible')
        cy.get("body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p:nth-child(3)")
         // cy.contains('Cotton Silk Hand Block Print Saree Top').should('be.visible')
             
         })


    
})