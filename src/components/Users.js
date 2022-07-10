import React, {useState} from 'react';
import UserRow from './users/UserRow';
import pencil from '../pics/pencil.png';
import './users.css';
import UserInfo from '../modals/UserInfo'

export default function Users(props) {
  const [showEdit, setShowEdit] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  return (
    <div>
        <div className='usersList'>
          {props.usersDB.map((i)=>(
            <UserRow key={i.name} name={i.name} img={i.img}>
              <button className='userRowBtn' onClick={()=>{setShowEdit(!showEdit); props.setEditUser(i.name)}} ><img src={pencil} alt='pencil' width='10px'/></button>
              <button className='userRowBtn' onClick={()=>props.setUsersDB(props.usersDB.filter(j=>j.name!==i.name))} >X</button>
            </UserRow>
          ))}
          {showEdit && <UserInfo modal='edit' editUser={props.editUser} usersDB={props.usersDB} changeUser={props.changeUser} setShowEdit={setShowEdit} />}
          {showCreate && <UserInfo editUser={props.editUser} usersDB={props.usersDB} addUser={props.addUser} setShowCreate={setShowCreate} />}
          <button onClick={()=>setShowCreate(!showCreate)}>Add new user</button>
        </div>
    </div>
  ) 
}
