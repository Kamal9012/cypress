describe('Testing the homepage feature ', ()=>{
    beforeEach(() =>{
        cy.visit('https://automationexercise.com/')
        cy.get("a[href='/login']").should('be.visible').click()
        cy.url().should('include', '/login')

       cy.get('[data-qa="login-email"]').type('rajeshdai@gmail.com')
       cy.get('[data-qa="login-password"]').type('Admin@1234')
       cy.get('[data-qa="login-button"]').click()
    })

       it.skip('To Test, The banner of homepage ' , ()=>{
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
         cy.get("button[type='button']").should("be.visible").click()
         
         cy.get(".modal-content").should("be.visible")
         cy.get('[href="/view_cart"]').eq(1).click()

         cy.get('[id="product-39"]').eq(0).should('be.visible')

        //  cy.get('.cart_product').should('be.visible')
        //  cy.get('.cart_description').should('be.visible')
        //  cy.get('.cart_price').should('be.visible')
         // cy.get('.cart_quantity').should('be.visible')
        //  cy.get('.cart_total').should('be.visible')
        //  cy.get('.cart_delete').should('be.visible')


        const cartColumns = [
         '.cart_product',
         '.cart_description',
         '.cart_price',
         '.cart_quantity',
          '.cart_total',
          '.cart_delete'
         ]

        cartColumns.forEach((col) => {
        cy.get(col).should('be.visible')
        })

        //cy.get('.cart_quantity').should('have.length', 10)

        cy.get('[class="btn btn-default check_out"]').eq(0).should('be.visible').click()
        cy.get('[id="address_delivery"]').should('be.visible')
        cy.get('[id="address_invoice"]').should('be.visible')
        cy.get('[name="message"]').type('Please delever on time.')
        cy.get('[href="/payment"]').should('be.visible').click()
        cy.get('[id="payment-form"]').should('be.visible')
        cy.get('[name="name_on_card"]').type('Test card')
        cy.get('[name="card_number"]').type('123456789')
        cy.get('[name="cvc"]').type('123')
        cy.get('[name="expiry_month"]').type('09')
        cy.get('[name="expiry_year"]').type('2027')
        cy.get('[id="submit"]').click()
       // cy.contain('Congratulations! Your order has been confirmed!').should('be.visible')
        cy.get('[href="/download_invoice/3000"]').click()
        cy.get('[href="/"]').eq(1).click()





        //  cy.get(".btn.btn-success.close-modal.btn-block").should("be.visible").click()
        // cy.get('#name').type("Elish acharya")
        // cy.get('#email').should('be.visible').type('rajeshdai@gmail.com')
        // cy.get('#review').should('be.visible').type("testing this web ")
        // cy.get('#button-review').should('be.visible').click()
         })


    
})