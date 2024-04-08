Cypress.Commands.add('login', (user, password) => {
    cy.visit('minha-conta/')
    cy.get('#username').type(user)
    cy.get('#password').type(password, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('searchProduct', (productName)=>{
    cy.visit('/produtos')
    cy.get('[name="s"]').eq(1).type(productName)
    //cy.get('.button-search').eq(1).click()
    cy.get('#ui-id-1 > :nth-child(1)').click()
})

Cypress.Commands.add('buyProduct', (size, color, quantity) =>{
    cy.get('.button-variable-item-'+size).click()
    cy.get('.button-variable-item-'+color).click()
    cy.get('.input-text').clear().type(quantity)
    cy.get('.single_add_to_cart_button').click()
})
