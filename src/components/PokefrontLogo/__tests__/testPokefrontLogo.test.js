import { render, screen } from '@testing-library/vue'
import PokefrontLogo from '../PokefrontLogo'

describe('PokefrontLogo', () => {
  beforeEach(() => {
    render(PokefrontLogo)
  })

  test('should render', () => {
    const logo = screen.getByRole('logo')

    expect(logo).toBeInTheDocument()
  })

  test('should print Poké text', () => {
    const pokeText = screen.getByText('Poké')

    expect(pokeText).toBeInTheDocument()
  })

  test('should print Front text', () => {
    const frontText = screen.getByText('Front')

    expect(frontText).toBeInTheDocument()
  })
})
