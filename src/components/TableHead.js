export const tableColumns = [
  {name: 'id', title: '#'},
  {name: 'firstName', title: 'First name'},
  {name: 'lastName', title: 'Last name'},
  {name: 'email', title: 'E-mail'},
  {name: 'phone', title: 'Phone'},
]

export const TableHead = () => {
  return (
    <thead>
      <tr>
        {tableColumns.map((colObj, ind) =>
          <th key = {'th-' + ind}>
            {colObj.title}
          </th>
        )}
      </tr>
    </thead>
  )
}
