import { Link } from 'react-router-dom';
import './register.css';

export default function register() {
  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
      <form className='registerForm'>
        <label>Username</label>
        <input
          type='text'
          className='registerInput'
          placeholder='Enter your username'
        />
        <label>Email</label>
        <input
          type='text'
          className='registerInput'
          placeholder='Enter your email'
        />
        <label>Email</label>
        <input
          type='password'
          className='registerInput'
          placeholder='Enter your password'
        />
        <button className='registerButton'>register</button>
      </form>
      <button className='loginRegisterButton'>
        <Link className='link' to='login'>
          LOGIN
        </Link>
      </button>
    </div>
  );
}
