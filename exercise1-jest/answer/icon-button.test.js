/**
 * @jest-environment jsdom
 */
 import React from 'react'
 import {render, screen, fireEvent, getByText, getByLabelText} from '@testing-library/react'
 import '@testing-library/jest-dom'
 import userEvent from '@testing-library/user-event'
 
 import IconButton  from './icon-button'

 const user = userEvent.setup()

 describe('IconButton', () => {
    it('labels the dropdown button', () => {
        const textFixture = "Send it!"
        const { getByLabelText } = render(<IconButton name={textFixture} />)
 
        const buttonText = getByLabelText(textFixture)
 
        expect(buttonText).toBeInTheDocument()
    })
    it('can be reached with the keyboard', () => {
        render(<IconButton name="Chuck it" />)
        const button = screen.getByTestId('btn-submit')

        user.tab()

        expect(button).toHaveFocus()
    })
    it('can be operated with the keyboard and assistive tech', async () => {
        let clicked = false
        render(<IconButton name="Fling it" onClick={()=> { clicked = true }} />)
        
        const button = screen.getByRole('button')

        button.focus()
        await user.keyboard('[Enter]')

        expect(clicked).toBe(true)
    })
 })