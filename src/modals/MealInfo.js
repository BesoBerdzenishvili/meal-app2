import './mealInfo.css'

export default function MealInfo() {
  return (
    <div className='mealInfo'>
        <h2>Add New Meal</h2>
        {/* make uploaded avatar appear here (in div?) */}
        <div className='innerMealInfo'>
        <label className='userLabel'>
                Name: 
                <input type='text' placeholder='Name...' />
            </label>
            <label>
                Calories: 
                <input type='number' placeholder='calories...' />
            </label>
            <label className='userLabel'>
                Date: 
                <input type='date' />
            </label>
            <label>
                Time: 
                <input type='time' />
            </label>
        </div>
        <div>
            <button>save</button>
            <button>cancel</button>
        </div>
    </div>
  )
}
