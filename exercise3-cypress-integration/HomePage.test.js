describe('HomePage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234/')
    })

    it('should have a Header', () => {
        cy.get('#header').contains('CampSpots')
    })
})