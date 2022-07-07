import React from 'react'
import pencil from '../../pics/pencil.png';
import './rows.css'


export default function Rows(props) {
  return (
    <div className='userRow' >
        <img src={props.img} alt='profile' width='64px'/>
        <h3 className='userName'>{props.name}</h3>
        <div>
            <button className='userRowBtn'><img src={pencil} alt='pencil' width='10px'/></button>
            <button className='userRowBtn'>X</button>
        </div>
    </div>
  )
}
