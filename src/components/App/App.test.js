import {render, fireEvent, waitFor} from '@testing-library/react'
import App from './App.js'
import {mock_data} from '../../test/mock_data.js'

describe('App component tests', () => {
  test('renders properly', () => {
    const {container} = render(<App />)
    expect(container).toMatchSnapshot()
  })
})
