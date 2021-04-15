import { render, screen, fireEvent } from '@testing-library/vue'

import Header from '../Header'
import Home from '../../../views/Home'
import About from '../../../views/About'
import Search from '../../../views/Search'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/search', name: 'Search', component: Search }
]

describe('Header', () => {
  beforeEach(() => {
    render(Header, { routes })
  })

  test('should render component', () => {
    const header = screen.getByRole('header')

    expect(header).toBeInTheDocument()
  })

  test('should print logo', () => {
    const logo = screen.getByRole('logo')

    expect(logo).toBeInTheDocument()
  })

  routes.forEach(route => {
    if (route.name !== 'Home') {
      test(`should print ${route.name} link`, () => {
        const paragraph = screen.getByText(route.name)

        expect(paragraph).toBeInTheDocument()
      })
    }
  })
})

describe('Routing', () => {
  beforeEach(() => {
    render(Header, { routes })
    location.hash = '#/'
  })

  routes.forEach(route => {
    if (route.name !== 'Home') {
      test(`should work ${route.name} route`, async () => {
        const link = screen.getByText(route.name)

        expect(location.hash).toBe('#/')

        await fireEvent.click(link)

        expect(location.hash).toBe(`#/${route.name.toLowerCase()}`)
      })
    }
  })
})
