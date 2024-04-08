/// <reference types="cypress" />
const profile = require("../fixtures/profile.json")

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
    cy.visit('/')
    cy.fixture('profile').then(data=>{
        cy.login(data.user, data.password)
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, marktest')
    })
    
  })

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    cy.fixture('products').then(data=>{
      cy.searchProduct(data[0].productName)
      cy.get('.product_title').should('contain', data[0].productName)
      
      cy.buyProduct(data[0].size, data[0].color, data[0].quantity)
      cy.get('.woocommerce-message').should('contain', data[0].quantity + ' × “' + data[0].productName + '” foram adicionados no seu carrinho.')
    })
  })


})