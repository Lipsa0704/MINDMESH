import { render, screen } from '@testing-library/react'
import App from './App'

test('renders heading text', () => {
  render(<App />)

  const heading = screen.getByText('Hello React')
  expect(heading).toBeInTheDocument()
})

test('renders button', () => {
  render(<App />)

  const button = screen.getByText('Click Me')
  expect(button).toBeInTheDocument()
})
