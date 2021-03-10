import {useState} from 'react'
import {getData} from '../utils/utils.js'

const urlSmallData = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
const urlBigData = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

export const LoadData = ({loadCallback}) => {
  const [loading, setLoading] = useState(false)

  const onBtnClick = (type) => {
    const url = type === 'small' ? urlSmallData : urlBigData
    setLoading(true)
    getData(url, (data) => {
      setLoading(false)
      loadCallback(data)
    })
  }

  return (
    <div className = 'loaddata-container'>
      Load data:
      <button
        className = 'btn btn-primary' onClick = {() => onBtnClick('small')}
      >
        Small
      </button>
      <button
        className = 'btn btn-primary' onClick = {() => onBtnClick('big')}
      >
        Big
      </button>
      {loading &&
        <div className ="spinner-border" role="status">
          <span className ="sr-only">Loading...</span>
        </div>
      }
    </div>
  )
}
