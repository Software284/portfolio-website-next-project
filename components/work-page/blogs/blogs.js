import classes from './blogs.module.css';
import HeaderFormat from '../../common-page/header-format/header-fromat';
import BlogFormat from '../../common-page/blog-format/blog-format';
import { useRouter } from 'next/router';
function Blog(props){
  console.log('Hero='+props.blogs);
  const router = useRouter();
  function blogPostClickedHandler(id){
    router.push('/work/'+id);
  }
    return (
      <section id="blog" class="py-3 text-center">
        <div class="container">
          <HeaderFormat
            title="Blogs"
            description="Here are my dailly activities"
          />
          <div className={classes.blog_content}>
            {props.blogs.map((blog) => (
              <BlogFormat
                key={blog.id}
                title={blog.title}
                url={blog.image}
                date={blog.date}
                location={blog.location}
                clicked={blogPostClickedHandler.bind(this,blog.id)}
              />
            ))}
          </div>
        </div>
      </section>
    );
}
export default Blog;