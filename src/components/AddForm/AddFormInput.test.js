import {render, fireEvent} from '@testing-library/react'
import {AddFormInput} from './AddFormInput.js'

describe('AddFormInput component tests', () => {
  const colName = 'id'
  const mock_addingChange = jest.fn()
  const mock_validChange = jest.fn()
  const valid = false

  const props = {
    colName: colName,
    addingChange: mock_addingChange,
    validChange: mock_validChange,
    valid: valid
  }

  test('renders properly', () => {
    const container = render(<AddFormInput {...props} />)
    expect(container).toMatchSnapshot()
  })

  test('renders properly with true valid prop', () => {
    props.valid = true
    const container = render(<AddFormInput {...props} />)
    expect(container).toMatchSnapshot()
  })

  test('input with correct value calls callback functions', () => {
    const value = '1'
    render(<AddFormInput {...props} />)
    fireEvent.change(document.querySelector('input'), {
      target: {value: value }
    })
    expect(mock_validChange).toHaveBeenCalledWith(colName, true)
    expect(mock_addingChange).toHaveBeenCalledWith(colName, value)
  })

  test('input with wrong value calls callback functions', () => {
    const value = 'some text'
    render(<AddFormInput {...props} />)
    fireEvent.change(document.querySelector('input'), {
      target: {value: value }
    })
    expect(mock_validChange).toHaveBeenCalledWith(colName, false)
    expect(mock_addingChange).toHaveBeenCalledWith(colName, value)
  })
})
