import { render, screen, logRoles } from '@testing-library/react'
import { Skills } from './skills'

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript']

  test('renders correctly', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />)
    const listItemElements = screen.getAllByRole('listitem')
    expect(listItemElements).toHaveLength(skills.length)
  })

  test('renders login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', { name: /login/i })
    expect(loginButton).toBeInTheDocument()
  })

  test('start learning button is not rendered', () => {
    render(<Skills skills={skills} />)
    const startLearningButton = screen.queryByRole('button', {
      name: /start learning/i,
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  test('Start learning button is eventually displayed', async () => {
    const view = render(<Skills skills={skills} />)
    logRoles(view.container)
    // screen.debug(); // This will log the current state of the DOM
    const startLearningButton = await screen.findByRole(
      'button',
      { name: /start learning/i },
      { timeout: 2000 }, // wait for up to 2 seconds
    )
    // screen.debug(); // This will log the updated state of the DOM
    expect(startLearningButton).toBeInTheDocument()
  })
})
