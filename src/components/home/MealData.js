import React from 'react'
import './mealData.css'

export default function MealData(props) {
  return (
    <div className='mealSection'>
        <h4 className='mealName'>{props.name}</h4>
        <p>Calories: {props.calories}</p>
        <p>Date: {props.date}</p>
        <p>Time: {props.time}</p>
        <div>
            {props.children}
        </div>
    </div>
  )
}
