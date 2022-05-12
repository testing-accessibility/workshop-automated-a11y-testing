describe('Passes Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234/passes')
        
        cy.injectAxe()
    })
    xit('should have no accessibility violations on load', () => {
        cy.checkA11y()
    })
    xit('should have an accessible payment dialog', () => {
        cy.get('#btn-join-basic').focus().click()

        // focus is sent into dialog
        cy.focused().should('have.attr', 'role', 'dialog')

        cy.realPress(["Tab"])
        cy.focused().should('have.attr', 'aria-label', 'Close Dialog')

        cy.realPress(["Escape"])
        cy.focused().should('have.attr', 'id', 'btn-join-basic')
    })
})