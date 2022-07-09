import React, {useState} from 'react';
import Raw from './users/Rows';
import pencil from '../pics/pencil.png';
import './users.css';
import Modal from '../modals/Modal'

export default function Users(props) {
  const [showEdit, setShowEdit] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [editUser, setEditUser] = useState('');
  // console.log(props.usersDB.sort((a, b) => {
  //   return new Date(b.date) - new Date(a.date);
  // }), 'useDB')
  return (
    <div>
        <div className='usersList'>
          {props.usersDB.map(i=>(
            <Raw key={i.name} name={i.name} img={i.img}>
              <button className='userRowBtn' onClick={()=>{setShowEdit(!showEdit); setEditUser(i.name)}} ><img src={pencil} alt='pencil' width='10px'/></button>
              <button className='userRowBtn' onClick={()=>props.setUsersDB(props.usersDB.filter(j=>j.name!==i.name))} >X</button>
            </Raw>
          ))}
          {showEdit && <Modal modal='edit' editUser={editUser} usersDB={props.usersDB} changeUser={props.changeUser} setShowEdit={setShowEdit} />}
          {showCreate && <Modal editUser={editUser} usersDB={props.usersDB} addUser={props.addUser} setShowCreate={setShowCreate} />}
          <button onClick={()=>setShowCreate(!showCreate)}>Add new user</button>
        </div>
    </div>
  ) 
}
