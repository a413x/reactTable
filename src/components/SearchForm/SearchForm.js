export const SearchForm = ({searchCallback}) => {
  return (
    <div className = 'search-form my-3'>
      <div className = 'form-inline'>
        <label>Search:</label>
        <input className = 'form-control mx-2' type = 'search'
          onChange = {e => searchCallback(e.target.value)}
        />
      </div>
    </div>
  )
}
