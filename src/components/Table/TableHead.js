import './TableHead.css'

export const tableColumns = [
  {name: 'id', title: '#'},
  {name: 'firstName', title: 'First name'},
  {name: 'lastName', title: 'Last name'},
  {name: 'email', title: 'E-mail'},
  {name: 'phone', title: 'Phone'},
]

export const TableHead = ({sortCallback, sortedCol}) => {
  const onClick = (colObj) => {
    let order = sortedCol.order
    if(!order) order = 'asc'
    if(sortedCol.name === colObj.name){
      order = order === 'asc' ? 'desc' : 'asc'
    }
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
              colObj.name === sortedCol.name ? sortedCol.order : ''
            }
          >
            {colObj.title}
          </th>
        )}
      </tr>
    </thead>
  )
}
