import {Table} from './components/Table.js'
import './App.css';

const data = [
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
    email: 'example@example.com',
    phone: '12345678'
  }
]

const App = () => {
  return (
    <div className="app">
      <Table data = {data} />
    </div>
  );
}

export default App
