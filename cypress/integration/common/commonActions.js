export const theUserClicksOn = (element) =>
    element.should('be.visible').should('not.be.disabled').click({ force: true });