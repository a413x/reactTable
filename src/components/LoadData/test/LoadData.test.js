import {render, fireEvent, waitFor} from '@testing-library/react'
import {LoadData} from '../LoadData.js'

describe('LoadData component tests', () => {
  const mock_loadCallback = jest.fn()

  test('renders properly', () => {
    const {container} = render(<LoadData loadCallback = {mock_loadCallback} />)
    expect(container).toMatchSnapshot()
  })

  test('spinner shows on button click', () => {
    render(<LoadData loadCallback = {mock_loadCallback} />)
    fireEvent.click(document.querySelector('button'))
    expect(document.querySelector('.spinner-border')).toBeInTheDocument()
  })

  test('loadCallback called on click and spinner hides', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mock_data)
      })
    )
    render(<LoadData loadCallback = {mock_loadCallback} />)
    fireEvent.click(document.querySelector('button'))
    await waitFor(
      () => expect(mock_loadCallback).toHaveBeenCalledWith(mock_data)
    )
    expect(document.querySelector('.spinner-border')).not.toBeInTheDocument()
  })
})
