import {render, fireEvent} from '@testing-library/react'
import {Table} from '../Table.js'

describe('Table component tests', () => {
  const mock_sortCallback = jest.fn()
  const mock_showDetailsCallback = jest.fn()
  const props = {
    data: [...mock_data],
    sortCallback: mock_sortCallback,
    showDetailsCallback: mock_showDetailsCallback
  }

  test('renders properly', () => {
    const {container} = render(<Table {...props}/>)
    expect(container).toMatchSnapshot()
  })
  test('showDetailsCallback function calls on table row click', () => {
    render(<Table {...props}/>)
    const index = 2
    const row = document.querySelectorAll('tbody tr')[index]
    fireEvent.click(row)
    expect(mock_showDetailsCallback).toHaveBeenCalledWith(mock_data[index])
  })
})
