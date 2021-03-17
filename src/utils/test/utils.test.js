import {sortData, searchData, getData} from '../utils.js'
import {mock_data} from '../../test/mock_data.js'

describe('Sort data function tests', () => {
  const shuffle = (array) => array.sort(() => Math.random() - 0.5)
  const getShuffled = () => shuffle([...mock_data])

  test('Sort by id asc', () => {
    const sorted = sortData(getShuffled(), 'id', 'asc')
    expect(sorted).toStrictEqual(mock_data)
  })
  test('Sort by email desc', () => {
    const sorted = sortData(getShuffled(), 'id', 'desc')
    expect(sorted).toStrictEqual([...mock_data].reverse())
  })
})

describe('Search data function tests', () => {
  test('Search by email', () => {
    const search = searchData(mock_data, 'Jlund@')
    expect(search).toStrictEqual([mock_data[3]])
  })
  test('Search by phone', () => {
    const search = searchData(mock_data, '969-6847');
    expect(search).toStrictEqual([mock_data[0]])
  })
})

describe('Get data function tests',() => {
    test('getData calls fetch and returns correct data', () => {
      global.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(mock_data)
        })
      )
      getData('url', data => {
        expect(fetch).toHaveBeenCalledWith('url')
        expect(data).toStrictEqual(mock_data)
      })
    })
})
