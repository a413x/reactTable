import {render, fireEvent} from '@testing-library/react'
import {SearchForm} from './SearchForm.js'

describe('SearchForm component tests', () => {
  const mock_searchCallback = jest.fn()
  test('renders properly', () => {
    const {container} = render(<SearchForm searchCallback={mock_searchCallback}/>)
    expect(container).toMatchSnapshot()
  })
  test('input event calls searchCallback function', () => {
    render(<SearchForm searchCallback={mock_searchCallback}/>)
    const searchStr = 'searchStr'
    const input = document.querySelector('input')
    fireEvent.change(input, { target: {value : searchStr} })
    expect(mock_searchCallback).toHaveBeenCalledWith(searchStr)
  })
})
