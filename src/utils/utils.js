export const sortData = (data, colName, order) => {
  const sign = order === 'asc' ? 1 : -1
  const sortedData = [...data]
  sortedData.sort((a, b) => {
    let val1 = a[colName]
    let val2 = b[colName]
    return val1 > val2 ? sign : -sign
  })
  return sortedData
}

export const getData = (url, callback) => {
  fetch(url)
    .then(resp => resp.json())
    .then(data => callback(data))
    .catch(err => console.log(err))
}
