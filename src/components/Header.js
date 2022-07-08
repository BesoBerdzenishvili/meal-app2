import './header.css';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
        <div>
          <Link to="/"><button className='headerBtn'>Main</button></Link>
          <Link to="/profile"><button>Profile</button></Link>
        </div>
        <button>Asc</button>
        <div>
          <Link to="/users"><button className='headerBtn'>Users</button></Link>
          <button onClick={()=>props.setLogin(false)}>Log out</button>
        </div>
    </header>
  )
}
