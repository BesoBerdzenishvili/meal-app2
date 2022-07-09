import React, {useState} from 'react';
import './home.css';
import MealInfo from '../modals/MealInfo';
import Headings from './home/Headings';
import Meal from './home/Meal';

export default function Home(props) {
  const [showEdit, setShowEdit] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [editMeal, setEditMeal] = useState([]);
  const editBtn = (jName, jIndex, jDate, jId) => {
    setEditMeal([jName, jIndex, jDate, jId]);
    // console.log(jName, 'jName', jIndex, 'jIndex', jDate, 'jDate', jId, 'jId')
    setShowEdit(!showEdit)
  }
  return (
    <div>
          {props.mealRowDB.map(i=>(
            <section key={i}>
              <Headings rowDate={i} />
              <div className='innerSection'>
              <button className='addBtn' onClick={()=>setShowCreate(!showCreate)}>Add meal</button>
                {props.mealDB.map((j, index)=>(
                  i === j.date &&
                  <Meal key={j.id} name={j.name}>
                    <button onClick={()=>editBtn(j.name, index, j.date, j.id)}>Edit</button>
                    <button>Delete</button>
                  </Meal>
                ))}
              </div>
            </section>
          ))}
          {showEdit && <MealInfo purpose='edit' setShowEdit={setShowEdit} editMeal={editMeal} mealDB={props.mealDB} changeMeal={props.changeMeal}/>}
          {showCreate && <MealInfo setShowCreate={setShowCreate} editMeal={editMeal} mealDB={props.mealDB} changeMeal={props.changeMeal}/>}
    </div>
  )
}
