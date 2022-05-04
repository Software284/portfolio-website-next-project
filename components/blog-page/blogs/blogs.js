import classes from './blogs.module.css';
import HeaderFormat from '../../common-page/header-format/header-fromat';
import BlogFormat from '../../common-page/blog-format/blog-format';
function Blog(){
    return (
      <section id="blog" class="py-3 text-center">
        <div class="container">
          <HeaderFormat
            title="Blogs"
            description="Here are my dailly activities"
          />
          <div className={classes.blog_content}>
            <BlogFormat title="Title One" url="img/testimonials/person1.jpg" date="05/04/2022" location="Baglung, Nepal"/>
            <BlogFormat title="Title Two" url="img/testimonials/person2.jpg" date="03/04/2022" location="Kathmandu, Nepal"/>
            <BlogFormat title="Title Three" url="img/testimonials/person3.jpg" date="02/04/2022" location="Washinton, USA"/>
            <BlogFormat title="Title Four" url="img/testimonials/person4.jpg" date="01/04/2022" location="Munich, Germany"/>
            <BlogFormat title="Title Five" url="img/items/item4.png" date="22/03/2022" location="Kyiv, Russia"/>
            <BlogFormat title="Title Six" url="img/items/item2.png" date="18/03/2022" location="Paris,France"/>
            <BlogFormat title="Title Seven" url="img/items/item3.png" date="12/03/2022" location="Frankfurt, Germany"/>
            <BlogFormat title="TItle Eight" url="img/items/item1.png" date="09/03/2022" location="Amstardam, Netherland"/>
          </div>
        </div>
      </section>
    );
}
export default Blog;