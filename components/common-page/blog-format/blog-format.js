import classes from './blog-format.module.css';
function BlogFormat(props){

  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  function loadBlogFullPostHandler(){

    // router.push('/blog/id')
    // router.push({
    //   pathname:'/clients/[id]/[clientprojectId]',
    //   query: {id: 'max', clientprojectId:'projecta'}
    // })
  }
    return (
      <div
        className={classes.blog_container}
        style={{
          backgroundImage: `url(${props.url})`,
          backgroundPosition: "center",
          backgroundSize: "center",
          backgroundRepeat: "no-repeat",
        }}
        onClick={props.clicked}
      >
        <h3>{props.title}</h3>
        <div className={classes.inner}>
          <p>{humanReadableDate}</p>
          <p>{props.location}</p>
        </div>

        <div className={classes.backdrop}></div>
      </div>
    );
}
export default BlogFormat;