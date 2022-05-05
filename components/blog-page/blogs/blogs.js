import classes from './blogs.module.css';
import HeaderFormat from '../../common-page/header-format/header-fromat';
import BlogFormat from '../../common-page/blog-format/blog-format';
import { blogs } from '../../../all-array';
function Blog(){
    return (
      <section id="blog" class="py-3 text-center">
        <div class="container">
          <HeaderFormat
            title="Blogs"
            description="Here are my dailly activities"
          />
          <div className={classes.blog_content}>
            {blogs.map((blog) => (
              <BlogFormat
                key={blog.id}
                title={blog.title}
                url={blog.url}
                date={blog.date}
                location={blog.location}
              />
            ))}
          </div>
        </div>
      </section>
    );
}
export default Blog;