/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen, fireEvent, getByText, getByLabelText } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import ButtonSubmit from "../button-submit"

const user = userEvent.setup()

describe('ButtonSubmit', () =>{
    it('labels the button', () => {
        const textFixture = "Send it!"
        const { getByLabelText } = render(<ButtonSubmit buttonName={textFixture} />)

        const buttonText = getByLabelText(textFixture)

        expect(buttonText).toBeInTheDocument()
    })
    xit('can be reached with the keyboard', () => {
        render(<ButtonSubmit buttonName="Chuck it" />)
        const button = screen.getByTestId('btn-submit')

        user.tab()
        expect(button).toHaveFocus()
    })
    it('can be operated with the keyboard and assistive tech', async () => {
        let clicked = false
        render(<ButtonSubmit buttonName="Fling it" onClick={()=> { clicked = true }} />)

        const button = screen.getByRole('button')

        button.focus()

        await user.keyboard('[Enter]')

        expect(clicked).toBe(true)
    })
})
