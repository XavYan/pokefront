import { render, screen } from '@testing-library/vue'
import Footer from '../Footer'

describe('Footer', () => {
  test('should render component', () => {
    render(Footer)

    const footer = screen.getByRole('footer')

    expect(footer).toBeInTheDocument()
  })

  test('should print author name and nickname', () => {
    render(Footer)
    const author = 'Himar Manuel Barquín Carrasco'
    const nickname = 'A Junior FullStack Web Developer'

    const paragraph = screen.getByText(`${author} - ${nickname}`)

    expect(paragraph).toBeInTheDocument()
  })

  test('should print current year and Copyright text', () => {
    render(Footer)

    const currentYear = new Date().getFullYear()
    const paragraph = screen.getByText(`Copyright ©${currentYear}`)

    expect(paragraph).toBeInTheDocument()
  })
})
