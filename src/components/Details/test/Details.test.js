import {render, fireEvent} from '@testing-library/react'
import {Details} from '../Details.js'
import {mock_data} from '../../test/mock_data.js'

describe('Details component tests', () => {
  const mock_closeDetailsCallback = jest.fn()
  const props = {
    dataObj: {...mock_data[2]},
    closeDetailsCallback: mock_closeDetailsCallback
  }
  test('renders properly', () => {
    const {container} = render(<Details {...props} />)
    expect(container).toMatchSnapshot()
  })
  test('renders properly without address and description', () => {
    props.dataObj = {...mock_data[4]}
    const {container} = render(<Details {...props} />)
    expect(container).toMatchSnapshot()
  })
  test('Close button calls close callback function', () => {
    render(<Details {...props} />)
    const button = document.querySelector('.close')
    fireEvent.click(button)
    expect(mock_closeDetailsCallback).toHaveBeenCalledTimes(1)
  })
})
