import {useState} from 'react'
import {tableColumns} from './TableHead.js'
import {AddFormInput} from './AddFormInput.js'

const objectToAdd = {}
const initialInputsValid = {}
tableColumns.forEach(colObj => initialInputsValid[colObj.name] = false)

export const AddForm = ({addCallback}) => {
  const [visible, setVisible] = useState(false)
  const [inputsValid, setInputsValid] = useState(initialInputsValid)

  const addingChange = (colName, value) => objectToAdd[colName] = value
  const validChange = (colName, valid) => {
    const newInputsValid = {...inputsValid}
    newInputsValid[colName] = valid
    setInputsValid(newInputsValid)
  }
  const onAdd = () => addCallback({...objectToAdd})
  const toggleForm = () => {
    const resetInputs = {...inputsValid}
    for(let colName in resetInputs) resetInputs[colName] = false
    setInputsValid(resetInputs)
    setVisible(!visible)
  }

  let allValid = true
  for(let colName in inputsValid){ allValid &= inputsValid[colName] }

  return (
    <div className = 'container'>
      <button className = 'btn btn-info' onClick = {toggleForm}>
        Add
      </button>
      {visible &&
        <div>
          {tableColumns.map((colObj, ind) =>
            <AddFormInput
              key = {ind}
              colName = {colObj.name}
              addingChange = {addingChange}
              validChange = {validChange}
              valid = {inputsValid[colObj.name]}
            />
          )}
          <button
            className = 'btn btn-success my-3'
            onClick = {onAdd}
            disabled = {allValid ? null : true}
          >
            +
          </button>
        </div>
      }
    </div>
  )
}
