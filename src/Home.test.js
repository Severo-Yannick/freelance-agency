import { render, screen } from '@testing-library/react'
import Home from './pages/Home'

test('renders link', () => {
  render(<Home />)
  const linkElement = screen.getByText(/Freelance Agency/i)
  expect(linkElement).toBeInTheDocument()
})
