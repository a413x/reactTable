import {render, fireEvent} from '@testing-library/react'
import {AddForm} from './AddForm.js'
import {mock_data} from '../../test/mock_data.js'

describe('AddForm component tests', () => {
  const mock_addCallback = jest.fn()
  const props = {
    addCallback: mock_addCallback
  }
  const objectToAdd = {...mock_data[4]}

  const setAllInputs = (inputs) => {
    let index = 0
    for(let colName in objectToAdd){
      fireEvent.change(inputs[index], { target: {value: objectToAdd[colName]} })
      index++
    }
  }

  test('renders properly', () => {
    const {container} = render(<AddForm {...props} />)
    expect(container).toMatchSnapshot()
  })

  test('renders properly with expanded form', () => {
    const {container, getByText} = render(<AddForm {...props} />)
    fireEvent.click(getByText('Add'))
    expect(getByText('+')).toBeDisabled()
    expect(container).toMatchSnapshot()
  })

  test('adding button is disabled if at least one input has the wrong value', () => {
    const {getByText} = render(<AddForm {...props} />)
    fireEvent.click(getByText('Add'))
    const inputs = document.querySelectorAll('input')
    fireEvent.change(inputs[0], {
      target: {value: objectToAdd.id }
    })
    fireEvent.change(inputs[1], {
      target: {value: objectToAdd.firstName }
    })
    expect(getByText('+')).toBeDisabled()
  })

  test('adding button is enabled when all inputs has correct value', () => {
    const {getByText} = render(<AddForm {...props} />)
    fireEvent.click(getByText('Add'))
    const inputs = document.querySelectorAll('input')
    setAllInputs(inputs)
    expect(getByText('+')).not.toBeDisabled()
  })

  test('adding button calls callback function with proper value', () => {
    const {getByText} = render(<AddForm {...props} />)
    fireEvent.click(getByText('Add'))
    const inputs = document.querySelectorAll('input')
    setAllInputs(inputs)
    fireEvent.click(getByText('+'))
    expect(mock_addCallback).toHaveBeenCalledWith(objectToAdd)
  })
})
