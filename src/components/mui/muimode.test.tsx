import { render, screen } from '../../test.utils'
import { MuiMode } from './muimode'

describe('MuiMode', () => {
  it('renders text correctly', () => {
    render(<MuiMode />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('light mode')
  })
})
