import {TableHead, tableColumns} from './TableHead.js'

export const Table = ({data, sortCallback, showDetailsCallback}) => {
  const onRowClick = (dataObj) => showDetailsCallback(dataObj)
  return (
    <div className = 'table-container container'>
      <table className = 'table table-hover'>
        <TableHead sortCallback = {sortCallback} />
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
