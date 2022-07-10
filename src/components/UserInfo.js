import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './userInfo.css';
import avatar from '../pics/genericAvatar.png';

export default function UserInfo(props) {
    const profileInfo = props.usersDB.filter(i=>i.name === props.currentUser)

    const [img, setImg] = useState(props.purpose === 'signup' ? avatar : profileInfo[0].img )
    const [user, setUser] = useState(props.purpose === 'signup' ? '' : profileInfo[0].name)
    const [pass, setPass] = useState(props.purpose === 'signup' ? '' : profileInfo[0].password)
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
        <Link to={(user && pass && passTwo && pass === passTwo && !props.sameUser) && "/"}>
            <button
                onClick={()=>{(!user || !pass) && alert('Please fill in all required fields (*)');
                props.purpose === 'signup'
                ?
                props.addUser(img, user, pass, passTwo, null, 1)
                :
                props.changeUser(profileInfo[0].name, img, user, pass, passTwo)}}
            >
                {props.purpose === 'signup' ? 'Signup' : 'Save'}
            </button>
        </Link>
    </div>
  )
}