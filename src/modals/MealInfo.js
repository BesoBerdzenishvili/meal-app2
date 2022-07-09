import './mealInfo.css'
import React, {useState} from 'react'

export default function MealInfo(props) {
    const mealInfo = props.mealDB.filter(i=>i.name === props.editMeal[0])
    
    const [meal, setMeal] = useState(props.purpose === 'edit' ? mealInfo[0].name : '')
    const [calories, setCalories] = useState(props.purpose === 'edit' ? mealInfo[0].calories : '')
    const [date, setDate] = useState(props.purpose === 'edit' ? mealInfo[0].date : '')
    const [time, setTime] = useState(props.purpose === 'edit' ? mealInfo[0].time : '')

    const clear = ()=> {
        setMeal('')
        setCalories('')
        setDate('')
        setTime('')
        props.purpose === 'edit' ? props.setShowEdit(false) : props.setShowCreate(false)
    }
  return (
    <div className='mealInfo'>
        {props.purpose === 'edit' ? <h2>Add New Meal</h2> : <h2>Edit meal</h2>}
        <div className='innerMealInfo'>
        <label className='userLabel'>
                Name: 
                <input type='text' placeholder='Name...' value={meal} onChange={e=>setMeal(e.target.value)} />
            </label>
            <label>
                Calories: 
                <input type='number' placeholder='calories...' value={calories} onChange={e=>setCalories(e.target.value)} />
            </label>
            <label className='userLabel'>
                Date: 
                <input type='date' value={date} onChange={e=>setDate(e.target.value)} />
            </label>
            <label>
                Time: 
                <input type='time' value={time} onChange={e=>setTime(e.target.value)} />
            </label>
        </div>
        <div>
            {
            props.purpose === 'edit'
            ?
            <button onClick={()=>{props.changeMeal(mealInfo[0].id, meal, calories, date, time);props.setShowEdit(false)}}>save</button>
            :
            <button onClick={()=>{props.addMeal(meal, calories, date, time); props.setShowCreate(false)}}>save</button>
            // close on save
            }
            <button onClick={()=>clear()}>cancel</button>
        </div>
    </div>
  )
}
