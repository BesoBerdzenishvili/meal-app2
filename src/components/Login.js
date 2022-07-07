import './login.css';
import React, {useState} from 'react'

export default function Login({usersDB, setLogin, setCurrentUser}) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const auth = (input, DBUsers) => {
    DBUsers[0].some(i=>i === input[0]) && DBUsers[1].some(i=>i === input[1]) ? setLogin(true) : alert('Incorrect username or password');
    setCurrentUser(input[0])  // user name
  }
  return (
    <div className='login'>
        <label>
            Username: 
            <input value={user} onChange={e=>setUser(e.target.value)} type='text' placeholder='username' />
        </label>
        <label className='passLabel'>
            Password: 
            <input value={pass} onChange={e=>setPass(e.target.value)}  type='password' placeholder='password' />
        </label>
        <div>
            <button onClick={()=>auth([user, pass], [usersDB.map(i=>i.name), usersDB.map(i=>i.password)])}>Login</button>
            <button>SignUp</button>
        </div>
    </div>
  )
}