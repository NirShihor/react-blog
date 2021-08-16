import React from 'react';
import './post.css';

export default function Post() {
  return (
    <div className='post'>
      <img
        className='postImg'
        src='https://cdn.pixabay.com/photo/2021/08/03/11/48/canal-6519196_960_720.jpg'
        alt=''
      />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>Lorem ipsum dolor, sit amet</span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde explicabo,
        nam cum eos id amet delectus deleniti labore tempora obcaecati quas vero
        eveniet natus, odit magnam at, consequuntur quos ipsum!Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Unde explicabo, nam cum eos id
        amet delectus deleniti labore tempora obcaecati quas vero eveniet natus,
        odit magnam at, consequuntur quos ipsum!Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Unde explicabo, nam cum eos id amet
        delectus deleniti labore tempora obcaecati quas vero eveniet natus, odit
        magnam at, consequuntur quos ipsum!
      </p>
    </div>
  );
}
