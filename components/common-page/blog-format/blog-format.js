import classes from './blog-format.module.css';
function BlogFormat(props){
    return (
      <div
        className={classes.blog_container}
        style={{
          backgroundImage: `url(${props.url})`,
          backgroundPosition: "center",
          backgroundSize: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h3>{props.title}</h3>
        <div className={classes.inner}>
          <p>{props.date}</p>
          <p>{props.location}</p>
        </div>

        <div className={classes.backdrop}></div>
      </div>
    );
}
export default BlogFormat;