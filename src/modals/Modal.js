import './modal.css';
import React, {useState} from 'react';

export default function Modal(props) {
  const profileInfo = props.usersDB.filter(i=>i.name === props.editUser)

  const [user, setUser] = useState(props.modal === 'edit' ? profileInfo[0].name : '')
  const [pass, setPass] = useState(props.modal === 'edit' ? profileInfo[0].password : '')
  const [type, setType] = useState(props.modal === 'edit' ? profileInfo[0].type : 'user');
  return (
    <div className='modal'>
        <button className='closeModal' onClick={()=> props.modal === 'edit' ? props.setShowEdit(false) : props.setShowCreate(false)}>X</button>
        <h2>Crate New User</h2>
        <div className='innerModal'>
            <label className='userLabel'>
                Username: 
                <input autoFocus type='text' placeholder='username' value={user} onChange={e=>setUser(e.target.value)} />
            </label>
            <label>
                Password: 
                <input type='text' placeholder='password' value={pass} onChange={e=>setPass(e.target.value)} />
            </label>
            <label className='userLabel'>
                User type: 
                <select value={type} onChange={e=>setType(e.target.value)}>
                    <option value="user">User</option>
                    <option value="moderator">Moderator</option>
                    <option value="admin">Admin</option>
                </select>
            </label>
        </div>
            <button
                onClick={()=>{props.modal === 'edit'
                ?
                props.changeUser(profileInfo[0].name, profileInfo[0].img, user, pass, pass, type)
                :
                props.addUser(null, user, pass, pass, type);
                props.modal === 'edit' ? props.setShowEdit(false) : props.setShowCreate(false)
            }}
            >
                {props.modal === 'edit' ? 'save' : 'Submit'}
            </button>
    </div>
  )
}
