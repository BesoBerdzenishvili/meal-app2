import './home.css';
import MealInfo from '../modals/MealInfo';
import Headings from './home/Headings'
import Meal from './home/Meal'

export default function Home(props) {
  return (
    <div>
          {props.mealDB.map(i=>(
            <section key={i.row}>
              <Headings rowDate={i.row} />
              <div className='innerSection'>
              <button className='addBtn'>Add meal</button>
                {i.meals.map(j=>(
                  <Meal key={j.id} name={j.name} />
                ))}
              </div>
            </section>
          ))}
        <MealInfo />
    </div>
  )
}
