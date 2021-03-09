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
