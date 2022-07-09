import './header.css';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const profileInfo = props.usersDB.filter(i=>i.name === props.currentUser)
  return (
    <header>
        <div>
          <Link to="/"><button className='headerBtn'>Main</button></Link>
          <Link to="/profile"><button>Profile</button></Link>
        </div>
        <button>Asc</button>
        <div>
          {profileInfo[0].type === ('admin' || 'moderator') && <Link to="/users"><button className='headerBtn'>Users</button></Link>}
          <button onClick={()=>props.setLogin(false)}>Log out</button>
        </div>
    </header>
  )
}