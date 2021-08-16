import { Link } from 'react-router-dom';
import './topbar.css';

export const TopBar = () => {
  const user = true;
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className='topIcon fab fa-facebook-square'></i>
        <i className='topIcon fab fa-twitter-square'></i>
        <i className='topIcon fab fa-pinterest-square'></i>
        <i className='topIcon fab fa-instagram-square'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to=''>
              HOME
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/about'>
              ABOUT
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/contact'>
              CONTACT
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/write'>
              WRITE
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/logout'>
              {user && 'LOGOUT'}
            </Link>
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <img
            className='topImg'
            src='https://cdn.pixabay.com/photo/2021/07/25/12/04/monkey-6491669_960_720.jpg'
            alt=''
          />
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/login'>
                LOGIN
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/register'>
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className='topSearchIcon fas fa-search'></i>
      </div>
    </div>
  );
};

export default TopBar;
