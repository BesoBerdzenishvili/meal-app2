import './mealInfo.css'
import React, {useState} from 'react'

export default function MealInfo(props) {
    // const mealInfo = props.mealDB.filter(i=>i.meals.name === props.editMeal[0])
    const mealInfo = props.purpose === 'edit' && props.mealDB.filter(i=>i.row === props.editMeal[2])
    const mealObj = props.purpose === 'edit' && mealInfo.map(i=>i.meals[props.editMeal[1]])
    console.log(mealObj, 'mealInfo', props.editMeal[3], 'JID')
    
    const [meal, setMeal] = useState(props.purpose === 'edit' ? mealObj[0].name : '')
    const [calories, setCalories] = useState(props.purpose === 'edit' ? mealObj[0].calories : '')
    const [date, setDate] = useState(props.purpose === 'edit' ? mealObj[0].date : '')
    const [time, setTime] = useState(props.purpose === 'edit' ? mealObj[0].time : '')

    const clear = ()=> {
        setMeal('')
        setCalories('')
        setDate('')
        setTime('')
        props.purpose === 'edit' ? props.setShowEdit(false) : props.setShowCreate(false)
    }
  return (
    <div className='mealInfo'>
        <h2>Add New Meal</h2>
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
            <button onClick={()=>props.changeMeal(props.editMeal[3], meal, calories, date, time)}>save</button>
            <button onClick={()=>clear()}>cancel</button>
        </div>
    </div>
  )
}
