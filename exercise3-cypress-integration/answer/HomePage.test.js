describe('HomePage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234/')
        
        cy.injectAxe()
    })
    xit('should have an aria-current home link', () => {
        cy.get('#header-logo a').should('have.attr', 'aria-current', 'page')
    })
    xit('should have no accessibility violations on load', () => {
        cy.checkA11y()
    })
})