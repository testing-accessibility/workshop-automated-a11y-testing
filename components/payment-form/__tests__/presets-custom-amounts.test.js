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
    it('acts as one tab stop',  async () => {
        render(
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
    it('enables a custom field amount', async () => {
        render(
            <form>
                <PresetsCustomAmounts amounts={[10, 25, 50]} />
                <button>Text</button>
            </form>
        )
            
        const firstRadio = screen.getByDisplayValue(10)
        const customRadio = screen.getByDisplayValue('Custom')
        const customInputText = screen.getByPlaceholderText('$ Other amount')
        
        await user.tab()
        expect(firstRadio).toHaveFocus()

        // applying pointer event as arrow keys aren't yet
        // implemented on radios in user-event
        customRadio.click()
        expect(customRadio).toBeChecked()

        await user.tab()

        expect(customInputText).toHaveFocus()
    })
 })