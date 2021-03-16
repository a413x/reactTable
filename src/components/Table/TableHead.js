import {useState} from 'react'
import './TableHead.css'

export const tableColumns = [
  {name: 'id', title: '#'},
  {name: 'firstName', title: 'First name'},
  {name: 'lastName', title: 'Last name'},
  {name: 'email', title: 'E-mail'},
  {name: 'phone', title: 'Phone'},
]

export const TableHead = ({sortCallback}) => {
  const [activeCol, setActiveCol] = useState({name: '', order: 'asc'})

  const onClick = (colObj) => {
    let order = activeCol.order
    if(activeCol.name === colObj.name){
      order = order === 'asc' ? 'desc' : 'asc'
    }else{
      order = 'asc'
    }
    setActiveCol({name: colObj.name, order: order})
    sortCallback(colObj, order)
  }

  return (
    <thead>
      <tr>
        {tableColumns.map((colObj, ind) =>
          <th
            key = {'th-' + ind}
            onClick = {() => onClick(colObj)}
            className = {
              activeCol.name === colObj.name ? activeCol.order : ''
            }
          >
            {colObj.title}
          </th>
        )}
      </tr>
    </thead>
  )
}
