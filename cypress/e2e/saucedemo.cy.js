describe('`pruebas sauce`', () => {
  it('abrir página', () => {
    cy.visit('https://sauce-demo.myshopify.com/')
  })
})

it('registrarse', () => {
    cy.visit('https://sauce-demo.myshopify.com/')
    cy.get('nav > #customer_register_link').click()
    cy.get('[name="customer[first_name]"]').type("azahara")
    cy.get('[name="customer[last_name]"]').type("leon")
    cy.get('[name="customer[email]"]').type("azaharalunar24@gmail.com")
    cy.get('[name="customer[password]"]').type("azahara56")
    cy.get('.action_bottom > input').click()
    cy.url().should('include', '/account')
})

it('intorudir mail y contraseña', () => {
    cy.visit('https://sauce-demo.myshopify.com/')
    cy.get('nav > #customer_login_link').click()
    cy.get('[name="customer[email]"]').type("azaharalunar24@gmail.com")
    cy.get('[name="customer[password]"]').type("azahara56")
    cy.get('#customer_login > .action_bottom > .button').click()
})    