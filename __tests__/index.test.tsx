import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Signup from '@/pages/Auth/Register'
 
describe('Register', () => {
  it('renders a heading', () => {
    render(<Signup />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})