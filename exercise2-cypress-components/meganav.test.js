import * as React from 'react'
import { mount } from '@cypress/react'

import MegaNav from 'components/meganav'

describe('MegaNav', () => {
    beforeEach(() => {
        mount(<MegaNav />)
    })

    it('should operate with the keyboard via toggle buttons', () => {
        cy.get('[data-testid="megamenu-section1"]').focus().click()

        cy.focused().should('have.attr', 'aria-expanded', 'true')
    })
})