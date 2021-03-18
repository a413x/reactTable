import {render, fireEvent} from '@testing-library/react'
import {TableHead, tableColumns} from './TableHead.js'

describe('TableHead component tests', () => {
  const mock_sortCallback = jest.fn()

  const renderWithTable = () => {
    const table = document.createElement('table')
    return render(
      <TableHead sortCallback={mock_sortCallback}/>,
      { container: document.body.appendChild(table) }
    )
  }

  test('renders properly', () => {
    const {container} = renderWithTable()
    expect(container).toMatchSnapshot()
  })

  test('sort arrow appears and changes in the table header cell on click', ()=>{
    const {getByText} = renderWithTable()
    const th = getByText(tableColumns[2].title)
    fireEvent.click(th)
    expect(th.classList.contains('asc')).toBe(true)
    fireEvent.click(th)
    expect(th.classList.contains('desc')).toBe(true)
  })

  test('sortCallback function calls on table header cell click', () => {
    const {getByText} = renderWithTable()
    const th = getByText(tableColumns[3].title)
    fireEvent.click(th)
    expect(mock_sortCallback).toHaveBeenCalledWith(tableColumns[3], 'asc')
  })
})
