import {sortData, searchData, getData} from '../utils.js'

const mock_data = [
  {
    id: 1,
    firstName: 'a',
    lastName: 'a',
    email: 'example1@email.com',
    phone: '11111111111'
  },
  {
    id: 2,
    firstName: 'b',
    lastName: 'b',
    email: 'example2@email.com',
    phone: '21111111111'
  },
  {
    id: 3,
    firstName: 'c',
    lastName: 'c',
    email: 'example3@email.com',
    phone: '31111111111'
  },
]

describe('Sort data function tests', () => {
  const shuffle = (array) => array.sort(() => Math.random() - 0.5)
  const getShuffled = () => shuffle([...mock_data])

  test('Sort by id asc', () => {
    const sorted = sortData(getShuffled(), 'id', 'asc')
    expect(sorted).toStrictEqual(mock_data)
  })
  test('Sort by email desc', () => {
    const sorted = sortData(getShuffled(), 'id', 'desc')
    expect(sorted).toStrictEqual(mock_data.reverse())
  })
})

describe('Search data function tests', () => {
  test('Search by email', () => {
    const search = searchData(mock_data, 'example3');
    expect(search).toStrictEqual([{
      id: 3,
      firstName: 'c',
      lastName: 'c',
      email: 'example3@email.com',
      phone: '31111111111'
    }])
  })
  test('Search by phone', () => {
    const search = searchData(mock_data, '21');
    expect(search).toStrictEqual([{
      id: 2,
      firstName: 'b',
      lastName: 'b',
      email: 'example2@email.com',
      phone: '21111111111'
    }])
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
