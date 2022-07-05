describe('Passes Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234/passes')
        
        cy.injectAxe()
    })
    it('should have no accessibility violations on load', () => {
        cy.checkA11y({
            exclude: ['div#portal-root']
        })
    })
    
})