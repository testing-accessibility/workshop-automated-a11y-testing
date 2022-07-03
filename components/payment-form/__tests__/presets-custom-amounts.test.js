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
                <PresetsCustomAmounts amounts={[10, 25, 50]} />
                <button>Text</button>
            </form>
        )

        // your test code here
    })

    it('enables a custom field amount', () => {
        render(
            <form>
                <PresetsCustomAmounts amounts={[10, 25, 50]} />
                <button>Text</button>
            </form>
        )
        
        // your test code here
    })
 })