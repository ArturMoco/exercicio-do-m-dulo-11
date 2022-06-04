///<reference types="cypress" />

context('Funcionalidade Login - Exercicio', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username')
            .type('arturmoco@gmail.com')
        cy.get('#password')
            .type('#Moco81692218')
        cy.get('.woocommerce-form > .button')
            .click()

        cy.get('.page-title')
            .should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
            .should('contain', 'Olá, arturmoco')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuario inválido', () => {
        cy.get('#username')
            .type('mocoartur@g.com')
        cy.get('#password')
            .type('#Moco81692218')
        cy.get('.woocommerce-form > .button')
            .click()

        cy.get('.woocommerce-error > li')
            .should('contain', 'Endereço de e-mail desconhecido.')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username')
            .type('arturmoco@gmail.com')
        cy.get('#password')
            .type('exercicioteste@teste')
        cy.get('.woocommerce-form > .button')
            .click()

        cy.get('.woocommerce-error > li')
            .should('contain', 'Erro: A senha fornecida para o e-mail arturmoco@gmail.com está incorreta. ')
    })
})