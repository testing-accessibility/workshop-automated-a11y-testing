/**
 * @jest-environment jsdom
 */

 import React from 'react'
 import { render, screen, fireEvent, getByText, getByLabelText } from '@testing-library/react'
 import '@testing-library/jest-dom'
 import userEvent from '@testing-library/user-event'
 
 import IconButton from "../icon-button"
 
 const user = userEvent.setup()
 

describe('IconButton', () => {
    it('labels the button', () => {
    const textFixture = 'Send it!';
    const { getByLabelText } = render(<IconButton name={textFixture} />);

    const buttonText = getByLabelText(textFixture);

    expect(buttonText).toBeInTheDocument();
  })
})
