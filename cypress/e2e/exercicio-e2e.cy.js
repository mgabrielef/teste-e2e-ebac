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
    cy.fixture('profile').then(profile=>{
        cy.login(profile.email, profile.password)
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, marktest')
    })
    
  })

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    const products = require('../fixtures/products.json')
    products.forEach(product=>{
      cy.searchProduct(product.productName)
      cy.get('.product_title').should('contain', product.productName)
      
      cy.buyProduct(product.size, product.color, product.quantity)
      cy.get('.woocommerce-message').should('contain', `${product.quantity} × “${product.productName}” foram adicionados no seu carrinho.`)
    })

    cy.fixture('profile').then(profile=>{
      cy.finishPurchase(profile.firstName, profile.lastName, profile.address, profile.city, profile.postcode, profile.phone)
      cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    })
  })

})