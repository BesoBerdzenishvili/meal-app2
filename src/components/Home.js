import React, {useState} from 'react';
import './home.css';
import MealInfo from '../modals/MealInfo';
import DateHeading from './home/DateHeading';
import MealData from './home/MealData';

export default function Home(props) {
  const [showEdit, setShowEdit] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [editMeal, setEditMeal] = useState([]);
  const editBtn = (jName, jIndex, jDate, jId) => {
    setEditMeal([jName, jIndex, jDate, jId]);
    setShowEdit(!showEdit)
  }
  const sortedMeals = props.asc ? props.mealRowDB.sort() : props.mealRowDB.sort().reverse()
  return (
    <main>
      <button className='addBtn' onClick={()=>setShowCreate(!showCreate)}>Add meal</button>
          {sortedMeals.map(i=>(
            <section key={i}>
              <DateHeading rowDate={i} />
              <div className='innerSection'>
                {props.mealDB.map((j, index)=>(
                  i === j.date &&
                  <MealData key={j.id} name={j.name} calories={j.calories} date={j.date} time={j.time}>
                    <button onClick={()=>editBtn(j.name, index, j.date, j.id)}>Edit</button>
                    <button onClick={()=>props.delMeal(j.id)}>Delete</button>
                  </MealData>
                ))}
              </div>
            </section>
          ))}
          {showEdit && <MealInfo setShowEdit={setShowEdit} editMeal={editMeal} mealDB={props.mealDB} changeMeal={props.changeMeal} purpose='edit'/>}
          {showCreate && <MealInfo addMeal={props.addMeal} setShowCreate={setShowCreate} editMeal={editMeal} mealDB={props.mealDB} changeMeal={props.changeMeal}/>}
    </main>
  )
}
