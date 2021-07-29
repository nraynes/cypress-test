/* eslint-disable no-undef */
/* eslint-disable jest/valid-expect */
describe('My first Test', () => {
    it('should visit the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io');
        cy.pause()
        cy.contains('type').click()
        cy.url()
            .should('include', '/commands/actions')
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    });
});