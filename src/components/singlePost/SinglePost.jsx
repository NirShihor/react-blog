import './singlePost.css';

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img
          className='singlePostImg'
          src='https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_960_720.jpg'
          alt=''
        />
        <h1 className='singlePostTitle'>
          Lorem ipsum dolor sit amet.
          <div className='singlePostEdit'>
            <i className='singlePostIcon far fa-edit'></i>
            <i className='singlePostIcon far fa-trash-alt'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuther'>
            Auther: <b>Nir</b>
          </span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          quisquam possimus ut aliquid quaerat pariatur incidunt aperiam
          accusamus vitae illum suscipit modi laboriosam, culpa sunt repellendus
          adipisci quidem, voluptatibus quod? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Officiis quisquam possimus ut aliquid
          quaerat pariatur incidunt aperiam accusamus vitae illum suscipit modi
          laboriosam, culpa sunt repellendus adipisci quidem, voluptatibus quod?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          quisquam possimus ut aliquid quaerat pariatur incidunt aperiam
          accusamus vitae illum suscipit modi laboriosam, culpa sunt repellendus
          adipisci quidem, voluptatibus quod?
        </p>
      </div>
    </div>
  );
}
