export const PagesNav = ({
    page, rowsOnPage, pagesCount, pageChangeCallback, rowsNumChangeCallback
  }) => {
  const onPageChange = (newPage) => pageChangeCallback(newPage)
  const onRowsNumChange = newRowsNum => rowsNumChangeCallback(newRowsNum)

  const prevEnable = (page !== 1)
  const nextEnable = (page !== pagesCount)

  return (
    <div className = 'container d-flex'>
      <button
        className = 'btn btn-light'
        onClick = {() => onPageChange(page - 1)}
        disabled = {prevEnable ? null : true}
      >
        ◀
      </button>
      <nav className = 'd-flex w-100 justify-content-around'>
        <form className = 'form-inline'>
          <label>Page</label>
          <input
            className = 'form-control m-2'
            style = {{width: '100px'}}
            type = 'number'
            onChange = {e => onPageChange(+e.target.value)}
            value = {page}
          />
          <label>of {pagesCount}</label>
        </form>
        <form className = 'form-inline'>
          <label className = 'mr-2'>Rows on page:</label>
          <select onChange = {e => onRowsNumChange(+e.target.value)}>
            <option>5</option>
            <option>10</option>
            <option>50</option>
          </select>
        </form>
      </nav>
      <button
        className = 'btn btn-light'
        onClick = {() => onPageChange(page + 1)}
        disabled = {nextEnable ? null : true}
      >
        ▶
      </button>
    </div>
  )
}
