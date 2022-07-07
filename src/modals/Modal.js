import './modal.css';

export default function Modal() {
  return (
    <div className='modal'>
        <h2>Crate New User</h2>
        {/* make uploaded avatar appear here (in div?) */}
        <div className='innerModal'>
            <label>
                Avatar: 
                <input type='file' />
            </label>
            <label className='userLabel'>
                Username: 
                <input type='text' placeholder='username' />
            </label>
            <label>
                Password: 
                <input type='text' placeholder='password' />
            </label>
        </div>
        <button>Submit</button>
    </div>
  )
}
