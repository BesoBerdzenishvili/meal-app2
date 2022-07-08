import './modal.css';
import React, {useState} from 'react';

export default function Modal(props) {
  const profileInfo = props.usersDB.filter(i=>i.name === props.editUser)

  const [user, setUser] = useState(props.modal === 'edit' ? profileInfo[0].name : '')
  const [pass, setPass] = useState(props.modal === 'edit' ? profileInfo[0].password : '')
  return (
    <div className='modal'>
        <button className='closeModal' onClick={()=> props.modal === 'edit' ? props.setShowEdit(false) : props.setShowCreate(false)}>X</button>
        <h2>Crate New User</h2>
        <div className='innerModal'>
            <label className='userLabel'>
                Username: 
                <input type='text' placeholder='username' value={user} onChange={e=>setUser(e.target.value)} />
            </label>
            <label>
                Password: 
                <input type='text' placeholder='password' value={pass} onChange={e=>setPass(e.target.value)} />
            </label>
        </div>
        {props.modal === 'edit' ?
            <button onClick={()=>props.changeUser(profileInfo[0].name, null, user, pass)}>save</button>
        :
            <button onClick={()=>props.addUser(null, user, pass)}>Submit</button>
        }
    </div>
  )
}
