import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Setting() {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Your Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className='settingsPP'>
            <img
              src='https://cdn.pixabay.com/photo/2021/08/04/18/44/ape-6522381_960_720.jpg'
              alt=''
            />
            <label htmlFor='fileInpute'>
              <i className='settingsPPIcon far fa-user-circle'></i>
            </label>
            <input type='file' id='fileInpute' style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type='text' placeholder='Nir' />
          <label>Email</label>
          <input type='email' placeholder='nir@gmail.com' />
          <label>Password</label>
          <input type='password' />
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
