import React from 'react'
import './Dropdown.css';

const Dropdown = ({zorluk, setZorlukDegistir}) => {
  return (
    <div className='dropdown'>
      <select onChange={e=>setZorlukDegistir(e.target.value)}>
        {
          zorluk.map((z,i) =>(
            <option key={i} value={z}>{z}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Dropdown