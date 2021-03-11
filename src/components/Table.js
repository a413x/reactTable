import {TableHead, tableColumns} from './TableHead.js'

export const Table = ({data, sortCallback}) => {
  return (
    <div className = 'table-container'>
      <table className = 'table table-hover'>
        <TableHead sortCallback = {sortCallback} />
        <tbody>
          {data.map((dataObj,ind) =>
            <tr key = {'tr-' + ind}>
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