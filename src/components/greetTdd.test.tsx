// greet should render the text "Hello" and if name is passed into the component
// it should render Hello followed by the name

import { render, screen } from '@testing-library/react'
import { GreetTdd } from './greetTdd'

describe('Greet', () => {
  test('renders correctly', () => {
    render(<GreetTdd />)
    const textElement = screen.getByText(/Hello/)
    expect(textElement).toBeInTheDocument
  })

  describe('Nested', () => {
    test('renders with a name', () => {
      render(<GreetTdd name="Lorem" />)
      const textElement = screen.getByText('Hello Lorem')
      expect(textElement).toBeInTheDocument
    })
  })
})
