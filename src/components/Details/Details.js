import './Details.css'

export const Details = ({dataObj, closeDetailsCallback}) => {
  const {firstName, lastName, description, address} = dataObj
  return(
    <div className = 'details card my-3 d-inline-block'>
      <div className = 'card-body'>
        <p>User selected: <b>{firstName + ' ' + lastName}</b></p>
        {description && <p className = 'd-flex'>
          <span className='mr-3'>Description:</span>
          <textarea value = {description} className = 'form-control' readOnly>
          </textarea>
        </p>}

        {address && <div>
          <p>Address: <b>{address.streetAddress}</b></p>
          <p>City: <b>{address.city}</b></p>
          <p>State: <b>{address.state}</b></p>
          <p>Index: <b>{address.zip}</b></p>
        </div>}

        <button type = 'button' className = 'close' aria-label = 'Close'
          onClick = {closeDetailsCallback}>
          <span aria-hidden = 'true'>&times;</span>
        </button>
      </div>
    </div>
  )
}
