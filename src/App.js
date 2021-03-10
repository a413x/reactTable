import {useState} from 'react'
import {Table} from './components/Table.js'
import {LoadData} from './components/LoadData.js'
import {PagesNav} from './components/PagesNav.js'
import {sortData} from './utils/utils.js'
import './styles/App.css';

const App = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [rowsOnPage, setRowsOnPage] = useState(5)

  const sortCallback = (colObj, order) => {
    const sortedData = sortData(data, colObj.name, order)
    setData(sortedData)
  }

  const loadCallback = data => setData(data)

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
