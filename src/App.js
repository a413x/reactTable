import {useState} from 'react'
import {Table} from './components/Table.js'
import {LoadData} from './components/LoadData.js'
import {sortData} from './utils/utils.js'
import './styles/App.css';

const mock_data = [
  {
    id : 1,
    firstName : 'A',
    lastName: 'B',
    email: 'example@example.com',
    phone: '12345678'
  },
  {
    id : 2,
    firstName : 'C',
    lastName: 'D',
    email: 'example@example1.com',
    phone: '123456789'
  }
]

const App = () => {
  const [data, setData] = useState(mock_data)

  const sortCallback = (colObj, order) => {
    const sortedData = sortData(data, colObj.name, order)
    setData(sortedData)
  }

  const loadCallback = (data) => {
    setData(data)
  }

  return (
    <div className="app">
      <LoadData loadCallback = {loadCallback} />
      <Table data = {data} sortCallback = {sortCallback}/>
    </div>
  );
}

export default App
