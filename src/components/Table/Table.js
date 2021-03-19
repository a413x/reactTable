import {TableHead, tableColumns} from './TableHead.js'
import './Table.css'

export const Table = ({data, sortedCol, sortCallback, showDetailsCallback}) => {
  const onRowClick = (dataObj) => showDetailsCallback(dataObj)
  return (
    <div className = 'table'>
      <table className = 'table table-hover'>
        <TableHead sortCallback = {sortCallback} sortedCol = {sortedCol} />
        <tbody>
          {data.map((dataObj,ind) =>
            <tr key = {'tr-' + ind} onClick = {(e) => onRowClick(dataObj)}>
              {tableColumns.map((colObj, ind) =>
                <td key = {ind}>
                  {dataObj[colObj.name]}
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
