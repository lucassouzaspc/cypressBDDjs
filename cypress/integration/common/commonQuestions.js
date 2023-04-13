export const theUserShouldSeeTheSuccessMessage = (message) => {
    cy.get('.MuiCollapse-entered [data-testid="alert-success"]').then((alert) => {
        cy.wrap(alert).should('be.visible');
        cy.wrap(alert).should('have.text', message);
    });
};