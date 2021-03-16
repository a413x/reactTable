import {validate} from '../../utils/validate.js'

export const AddFormInput = ({
  colName, addingChange, validChange, valid
}) => {
  const onChange = (value) => {
    let valueValid = false
    if(colName === 'id') {
      valueValid = validate('number', value)
    }else if(colName === 'firstName' || colName === 'lastName'){
      valueValid = validate('text', value)
    }else if(colName === 'email'){
      valueValid = validate('email', value)
    }else if(colName === 'phone'){
      valueValid = validate('phone', value)
    }
    validChange(colName, valueValid)
    addingChange(colName, value)
  }

  const validClass = valid ? 'is-valid' : 'is-invalid'
  return (
    <div>
      <label>{colName}</label>
      <input
        className = {'form-control ' + validClass}
        onChange = {(e) => onChange(e.target.value)}
      />
      <div className = 'invalid-feedback'>
        Please enter correct value
      </div>
    </div>
  )
}
