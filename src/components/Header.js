import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <div>
          <Link to="/"><button className='headerBtn'>Main</button></Link>
          <button>Profile</button>
        </div>
        <button>Asc</button>
        <div>
          <Link to="/users"><button className='headerBtn'>Users</button></Link>
          <button>Log out</button>
        </div>
    </header>
  )
}
