import classes from './blogs-content.module.css';
import BlogContentFormat from '../../common-page/blog-content-format/blog-content-format';
function BlogContent(props){
   
    return (
      <section id="blog-content" class="text-center py-3">
        <div className={"container "+classes.mycontainer}>
          <BlogContentFormat
            key={props.data.id}
            url={"/"+props.data.image}
            title={props.data.title}
            description={props.data.description}
            location={props.data.location}
            date={props.data.date}
          />
        </div>
      </section>
    );
}
export default BlogContent;