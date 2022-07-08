import React from 'react'
import './rows.css'


export default function Rows(props) {
  return (
    <div className='userRow' >
        <img src={props.img} alt='profile' width='64px'/>
        <h3 className='userName'>{props.name}</h3>
        <div>
          {props.children}
        </div>
    </div>
  )
}
