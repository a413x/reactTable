import {useState} from 'react'
import {Table} from '../Table/Table.js'
import {LoadData} from '../LoadData/LoadData.js'
import {AddForm} from '../AddForm/AddForm.js'
import {PagesNav} from '../PagesNav/PagesNav.js'
import {SearchForm} from '../SearchForm/SearchForm.js'
import {Details} from '../Details/Details.js'
import {sortData, searchData} from '../../utils/utils.js'

let storedData = []

const App = () => {
  const [data, setData] = useState([...storedData])
  const [page, setPage] = useState(1)
  const [rowsOnPage, setRowsOnPage] = useState(5)
  const [selectedData, setSelectedData] = useState(null)

  const sortCallback = (colObj, order) => {
    const sortedData = sortData(data, colObj.name, order)
    setData(sortedData)
  }

  const searchCallback = search => {
    const filtered = searchData(storedData, search)
    if(filtered.length === storedData.length) {
      setData(storedData)
    }
    setPage(1)
    setData(filtered)
  }

  const loadCallback = data => {
    storedData = [...data]
    setData(data)
  }

  const addCallback = dataObj => {
    const newData = [...data]
    newData.push(dataObj)
    setData(newData)
  }

  const pagesCount = Math.ceil(data.length/rowsOnPage)
  const pageChangeCallback = newPage => {
    if(newPage < 1 || newPage > pagesCount) return
    setPage(newPage)
  }

  const rowsNumChangeCallback = newRowsNum => {
    setPage(1)
    setRowsOnPage(newRowsNum)
  }

  const showDetailsCallback = dataObj => setSelectedData({...dataObj})
  const closeDetailsCallback = () => setSelectedData(null)

  const from = (page-1)*rowsOnPage
  const dataToShow = data.slice(from, from + rowsOnPage)

  return (
    <div className = 'app container'>
      <LoadData loadCallback = {loadCallback} />
      <AddForm addCallback = {addCallback} />
      <SearchForm searchCallback = {searchCallback} />
      <Table
        data = {dataToShow}
        sortCallback = {sortCallback}
        showDetailsCallback = {showDetailsCallback}
      />
      <PagesNav
        page = {page} rowsOnPage = {rowsOnPage}
        pagesCount = {pagesCount}
        pageChangeCallback = {pageChangeCallback}
        rowsNumChangeCallback = {rowsNumChangeCallback}
      />
      {selectedData &&
        <Details
          dataObj = {selectedData}
          closeDetailsCallback = {closeDetailsCallback}
        />
      }
    </div>
  )
}

export default App