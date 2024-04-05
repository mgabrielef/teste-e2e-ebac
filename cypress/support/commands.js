Cypress.Commands.add('login', (usuario, senha) => {
    cy.visit('minha-conta/')
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('searchProduct', (productName)=>{
    cy.visit('/produtos')
    cy.get('[name="s"]').eq(1).type(productName)
    cy.get('.button-search').eq(1).click()
})

Cypress.Commands.add('buyProduct', (size, color, quantity) =>{
    
})
