Cypress.Commands.add('login', (email, password)=>{
    cy.visit('minha-conta/')
    cy.get('#username').type(email)
    cy.get('#password').type(password, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('searchProduct', (productName)=>{
    cy.visit('/produtos')
    cy.get('[name="s"]').eq(1).type(productName)
    //cy.get('.button-search').eq(1).click()
    cy.get('#ui-id-1 > :nth-child(1)').click()
})

Cypress.Commands.add('buyProduct', (size, color, quantity)=>{
    cy.get('.button-variable-item-'+size).click()
    cy.get('.button-variable-item-'+color).click()
    cy.get('.input-text').clear().type(quantity)
    cy.get('.single_add_to_cart_button').click()
})

Cypress.Commands.add('finishPurchase', (firstName, lastName, address, city, postcode, phone)=>{
    cy.visit('carrinho/')
    cy.get('.checkout-button').click()
    cy.get('#billing_first_name').clear().type(firstName)
    cy.get('#billing_last_name').clear().type(lastName)
    cy.get('#billing_address_1').clear().type(address)
    cy.get('#billing_city').clear().type(city)
    cy.get('#billing_postcode').clear().type(postcode)
    cy.get('#billing_phone').clear().type(phone)
    cy.get('#terms').click()
    cy.get('#place_order').click()
}) 
