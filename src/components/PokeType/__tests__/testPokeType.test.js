import { render, screen } from '@testing-library/vue'
import PokeType from '../PokeType'

const types = [
  'water',
  'fire',
  'normal',
  'grass',
  'electric',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dark',
  'dragon',
  'steel',
  'fairy'
]

describe('PokeType', () => {
  test('should render', () => {
    render(PokeType, { props: { name: 'water' } })

    const type = screen.getByRole('poke-type')

    expect(type).toBeInTheDocument()
  })

  types.forEach(type => {
    test(`should print ${type} type`, () => {
      render(PokeType, { props: { name: type } })

      const typeElement = screen.getByText(type)

      expect(typeElement).toHaveClass(type)
    })
  })
})
