import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './userInfo.css';
import avatar from '../pics/genericAvatar.png';

export default function UserInfo(props) {
    const [img, setImg] = useState(avatar) // gets value from props (SignIn ? 'genericAvatarPic' : img from usersDB)
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [passTwo, setPassTwo] = useState('')

    const updateAvatarImg = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
      };

  return (
    <div className='userInfo'>
        <img src={img} width='324px' alt='avatar' />
        <div className='labelContainer'>
            <label className='label'>
                Upload image: 
                <input type='file' onChange={updateAvatarImg} />
            </label>
            <label className='label'>
                *Username: 
                <input required type='text' placeholder='username' value={user} onChange={e=>setUser(e.target.value)} />
            </label>
            <label className='label'>
                *Password: 
                <input required type='password' placeholder='password' value={pass} onChange={e=>setPass(e.target.value)} />
            </label>
            <label className='label'>
                *Confirm password: 
                <input required type='password' placeholder='confirm password' value={passTwo} onChange={e=>setPassTwo(e.target.value)} />
            </label>
        </div>
        <Link to={(user && pass && passTwo && pass === passTwo && !props.sameName) && "/"}><button onClick={()=>{(!user || !pass) && alert('Please fill in all required fields (*)'); pass === passTwo ? props.addUser(img, user, pass, passTwo) : alert('passwords don\'t match')}} >Submit</button></Link>
    </div>
  )
}
// if user || pass || passTwo || pass === passTwo || !sameName then allow link to Home