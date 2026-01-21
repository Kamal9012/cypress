describe('Product Detail Page - Saree', () => {

  beforeEach(() => {
    cy.visit('https://automationexercise.com/')
    cy.visit('https://automationexercise.com/product_details/39')
    cy.visit('/product/cotton-silk-hand-block-print-saree');
  });

  /* ---------------- Product Info ---------------- */

  it('should display product image', () => {
    cy.get('img').should('be.visible');
  });

  it('should display product name', () => {
    cy.contains('Cotton Silk Hand Block Print Saree').should('be.visible');
  });

  it('should display product price', () => {
    cy.contains('Rs. 3000').should('be.visible');
  });

  it('should display availability as In Stock', () => {
    cy.contains('Availability').parent().should('contain.text', 'In Stock');
  });

  it('should display brand name', () => {
    cy.contains('Brand').parent().should('contain.text', 'Biba');
  });

  /* ---------------- Quantity ---------------- */

  it('should have default quantity as 1', () => {
    cy.get('input[type="number"]').should('have.value', '1');
  });

  it('should increase quantity', () => {
    cy.get('input[type="number"]').clear().type('2');
    cy.get('input[type="number"]').should('have.value', '2');
  });

  it('should not allow quantity less than 1', () => {
    cy.get('input[type="number"]').clear().type('0');
    cy.get('input[type="number"]').should('not.have.value', '0');
  });

  /* ---------------- Add to Cart ---------------- */

  it('should add product to cart', () => {
    cy.contains('Add to cart').click();
    cy.contains('added to cart', { matchCase: false }).should('be.visible');
  });

  /* ---------------- Review Section ---------------- */

  it('should display write review section', () => {
    cy.contains('WRITE YOUR REVIEW').should('be.visible');
  });

  it('should show validation error when submitting empty review', () => {
    cy.contains('Submit').click();
    cy.contains('required', { matchCase: false }).should('be.visible');
  });

  it('should show error for invalid email', () => {
    cy.get('input[placeholder="Your Name"]').type('Kamal');
    cy.get('input[placeholder="Email Address"]').type('invalidemail');
    cy.get('textarea').type('Nice product');
    cy.contains('Submit').click();

    cy.contains('invalid email', { matchCase: false }).should('be.visible');
  });

  it('should submit review with valid data', () => {
    cy.get('input[placeholder="Your Name"]').type('Kamal');
    cy.get('input[placeholder="Email Address"]').type('kamal@test.com');
    cy.get('textarea').type('Quality is very good and fabric is comfortable.');
    cy.contains('Submit').click();

    cy.contains('thank', { matchCase: false }).should('be.visible');
  });

});
