/**
 * @jest-environment jsdom
 */
import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
 
import PresetsCustomAmounts from '../presets-custom-amounts'

const user = userEvent.setup()
 
describe('Preset amount radio buttons', () => {
    it('act as one tab stop',  async () => {
        const { getByText } = render(
            <form>
                <PresetsCustomAmounts amounts={[5, 15, 25]} />
                <button>Text</button>
            </form>
        )
 
        const firstRadio = screen.getByDisplayValue(5)
        const button = screen.getByRole('button')
        
        await user.tab()
        expect(firstRadio).toHaveFocus()

        await user.tab()

        expect(button).toHaveFocus()
    })
 })