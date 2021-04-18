import { render, screen } from '@testing-library/vue'
import PokeCardId from '../PokeCardId'
import PokeCardImage from '../PokeCardImage'
import PokeCardName from '../PokeCardName'
import PokeCardTypes from '../PokeCardTypes'

describe('PokeCardId', () => {
  beforeEach(() => {
    const props = {
      id: 1
    }

    render(PokeCardId, { props })
  })

  test('should render', () => {
    const id = screen.getByText('#1')

    expect(id).toBeInTheDocument()
  })
})

describe('PokeCardImage', () => {
  beforeEach(() => {
    const props = {
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png',
      alt: 'Sudowoodo image'
    }

    render(PokeCardImage, { props })
  })

  test('should render', () => {
    const image = screen.getByAltText('Sudowoodo image')

    expect(image).toBeInTheDocument()
  })
})

describe('PokeCardName', () => {
  beforeEach(() => {
    const props = {
      name: 'Pikachu'
    }

    render(PokeCardName, { props })
  })

  test('should render', () => {
    const name = screen.getByText('Pikachu')

    expect(name).toBeInTheDocument()
  })
})

describe('PokeCardTypes', () => {
  beforeEach(() => {
    const props = {
      types: [
        'grass',
        'water'
      ]
    }

    render(PokeCardTypes, { props })
  })

  test('should render first type', () => {
    const type1 = screen.getByText('grass')

    expect(type1).toBeInTheDocument()
  })

  test('should render second type', () => {
    const type2 = screen.getByText('water')

    expect(type2).toBeInTheDocument()
  })
})
