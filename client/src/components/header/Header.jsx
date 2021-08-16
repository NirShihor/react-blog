import './header.css';
export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img
        className='headerImg'
        src='https://cdn.pixabay.com/photo/2021/08/02/16/22/beach-6517214_960_720.jpg'
        alt=''
      />
    </div>
  );
}
