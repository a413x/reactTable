export const SearchForm = ({searchCallback}) => {
  return (
    <div className = 'container my-3'>
      <form className = 'form-inline'>
        <label>Search:</label>
        <input className = 'form-control mx-2' type = 'search'
          onChange = {e => searchCallback(e.target.value)}
        />
      </form>
    </div>
  )
}
