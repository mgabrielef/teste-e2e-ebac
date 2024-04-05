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
    cy.fixture('profile').then( data => {
        cy.login(data.user, data.password)
    })
      
  })

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    cy.searchProduct('Aether Gym Pant')    
      
  })


})