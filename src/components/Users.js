import Raw from './users/Rows';
import './users.css'

export default function Users(props) {
  console.log(props.usersDB, 'usersDB')
  return (
    <div>
        <div className='usersList'>
          {props.usersDB.map(i=>(
            <Raw key={i.name} name={i.name} img={i.img} />
          ))}
          <button>Add new user</button>
        </div>
    </div>
  )
}
