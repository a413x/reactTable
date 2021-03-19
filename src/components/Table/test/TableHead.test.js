import {render, fireEvent} from '@testing-library/react'
import {TableHead, tableColumns} from '../TableHead.js'

describe('TableHead component tests', () => {
  const mock_sortCallback = jest.fn()

  const renderWithTable = (sortedCol = {name: '', order: ''}) => {
    const table = document.createElement('table')
    return render(
      <TableHead
        sortCallback={mock_sortCallback}
        sortedCol = {sortedCol}
      />,
      { container: document.body.appendChild(table) }
    )
  }

  test('renders properly', () => {
    const {container} = renderWithTable()
    expect(container).toMatchSnapshot()
  })

  test('ascending sort arrow correctly displays', ()=>{
    const column = tableColumns[2]
    const {getByText} = renderWithTable({name: column.name, order: 'asc'})
    const th = getByText(column.title)
    expect(th.classList.contains('asc')).toBe(true)
  })

  test('descending sort arrow correctly displays', ()=>{
    const column = tableColumns[2]
    const {getByText} = renderWithTable({name: column.name, order: 'desc'})
    const th = getByText(column.title)
    expect(th.classList.contains('desc')).toBe(true)
  })

  test('sortCallback function calls on table header cell click', () => {
    const {getByText} = renderWithTable()
    const column = tableColumns[3]
    const th = getByText(column.title)
    fireEvent.click(th)
    expect(mock_sortCallback).toHaveBeenCalledWith(column, 'asc')
  })
})
