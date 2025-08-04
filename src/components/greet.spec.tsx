import { render, screen } from '@testing-library/react'
import { GreetTdd } from './greetTdd'

describe('Greet', () => {
  it('renders correctly', () => {
    render(<GreetTdd />)
    const textElement = screen.getByText(/Hello/)
    expect(textElement).toBeInTheDocument
  })

  describe('Nested', () => {
    it('renders with a name', () => {
      render(<GreetTdd name="Lorem" />)
      const textElement = screen.getByText('Hello Lorem')
      expect(textElement).toBeInTheDocument
    })
  })
})
