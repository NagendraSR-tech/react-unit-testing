import { render, screen } from '@testing-library/react'
import { GreetTdd } from '../components/greetTdd'

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
