import {render, fireEvent, screen} from '@testing-library/react'
import {PagesNav} from './PagesNav.js'
import {mock_data} from '../../test/mock_data.js'

describe('PagesNav component tests', () => {
  const mock_pageChangeCallback = jest.fn()
  const mock_rowsNumChangeCallback = jest.fn()
  const props = {
    page: 1,
    rowsOnPage: 5,
    pagesCount: 5,
    pageChangeCallback: mock_pageChangeCallback,
    rowsNumChangeCallback: mock_rowsNumChangeCallback
  }
  test('renders properly', () => {
    const {container} = render(<PagesNav {...props} />)
    expect(container).toMatchSnapshot()
  })
  test('previous page button disabled on 1st page', () => {
    render(<PagesNav {...props} />)
    expect(screen.getByText('▶')).not.toBeDisabled()
    expect(screen.getByText('◀')).toBeDisabled()
  })
  test('next page button disabled on last page', () => {
    props.page = 5
    render(<PagesNav {...props} />)
    expect(screen.getByText('◀')).not.toBeDisabled()
    expect(screen.getByText('▶')).toBeDisabled()
  })
  test('page change calls pageChangeCallback function', () => {
    render(<PagesNav {...props} />)
    const input = document.querySelector('input')
    fireEvent.change(input, { target: {value: '3'} })
    expect(mock_pageChangeCallback).toHaveBeenCalledWith(3)
  })
  test('prev and next page buttons work', () => {
    props.page = 3
    render(<PagesNav {...props} />)
    const prevButton = screen.getByText('◀')
    const nextButton = screen.getByText('▶')
    fireEvent.click(prevButton)
    expect(mock_pageChangeCallback).toHaveBeenCalledWith(2)
    fireEvent.click(nextButton)
    expect(mock_pageChangeCallback).toHaveBeenCalledWith(4)
  })
  test('rows number selector calls rowsNumChangeCallback function', () => {
    render(<PagesNav {...props} />)
    const select = document.querySelector('select')
    fireEvent.change(select, { target: {value: '10'} })
    expect(mock_rowsNumChangeCallback).toHaveBeenCalledWith(10)
  })
})
