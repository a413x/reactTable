import {useState} from 'react'
import {Table} from './components/Table.js'
import {LoadData} from './components/LoadData.js'
import {PagesNav} from './components/PagesNav.js'
import {SearchForm} from './components/SearchForm.js'
import {sortData, searchData} from './utils/utils.js'
import './styles/App.css';

let storedData = []

const App = () => {
  const [data, setData] = useState([...storedData])
  const [page, setPage] = useState(1)
  const [rowsOnPage, setRowsOnPage] = useState(5)

  const sortCallback = (colObj, order) => {
    const sortedData = sortData(data, colObj.name, order)
    setData(sortedData)
  }

  const searchCallback = search => {
    const filtered = searchData(storedData, search)
    if(filtered.length === storedData.length) {
      setData(storedData)
    }
    setData(filtered)
  }

  const loadCallback = data => {
    storedData = [...data]
    setData(data)
  }

  const pagesCount = Math.ceil(data.length/rowsOnPage)
  const pageChangeCallback = newPage => {
    if(newPage < 1 || newPage > pagesCount) return
    setPage(newPage)
  }

  const rowsNumChangeCallback = newRowsNum => setRowsOnPage(newRowsNum)

  const from = (page-1)*rowsOnPage;
  const dataToShow = data.slice(from, from + rowsOnPage)

  return (
    <div className="app">
      <LoadData loadCallback = {loadCallback} />
      <SearchForm searchCallback = {searchCallback} />
      <Table data = {dataToShow} sortCallback = {sortCallback}/>
      <PagesNav
        page = {page} rowsOnPage = {rowsOnPage}
        pagesCount = {pagesCount}
        pageChangeCallback = {pageChangeCallback}
        rowsNumChangeCallback = {rowsNumChangeCallback}
      />
    </div>
  );
}

export default App
