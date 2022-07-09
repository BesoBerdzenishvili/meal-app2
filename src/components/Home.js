import React, {useState} from 'react';
import './home.css';
import MealInfo from '../modals/MealInfo';
import Headings from './home/Headings';
import Meal from './home/Meal';

export default function Home(props) {
  const [showEdit, setShowEdit] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [editMeal, setEditMeal] = useState('');
  return (
    <div>
          {props.mealDB.map(i=>(
            <section key={i.row}>
              <Headings rowDate={i.row} />
              <div className='innerSection'>
              <button className='addBtn' onClick={()=>setShowCreate(!showCreate)}>Add meal</button>
                {i.meals.map(j=>(
                  <Meal key={j.id} name={j.name}>
                    <button onClick={()=>{setEditMeal(j.name); setShowEdit(!showEdit)}}>Edit</button>
                    <button>Delete</button>
                  </Meal>
                ))}
              </div>
            </section>
          ))}
          {showEdit && <MealInfo purpose='edit' setShowEdit={setShowEdit} editMeal={editMeal} mealDB={props.mealDB}/>}
          {showCreate && <MealInfo setShowCreate={setShowCreate} editMeal={editMeal} mealDB={props.mealDB}/>}
    </div>
  )
}
