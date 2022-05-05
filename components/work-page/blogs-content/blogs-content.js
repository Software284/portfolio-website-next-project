import classes from './blogs-content.module.css';
import BlogContentFormat from '../../common-page/blog-content-format/blog-content-format';
import { blogs } from '../../../all-array';
function BlogContent(props){
    const data = blogs.find((item) => item.id === props.id);
    if(!data){
        return <p>no data found!</p>
    }
    return (
      <section id="blog-content" class="text-center py-3">
        <div className={"container "+classes.mycontainer}>
          <BlogContentFormat
            key={data.id}
            url={"/"+data.url}
            title={data.title}
            description={data.description}
            location={data.location}
            date={data.date}
          />
        </div>
      </section>
    );
}
export default BlogContent;