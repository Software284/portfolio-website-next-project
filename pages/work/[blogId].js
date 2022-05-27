import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import BlogContent from '../../components/work-page/blogs-content/blogs-content';
import {getBlogsById,getAllBlogs} from '../../helpers/work-page/blogs-api-utils';
import ErrorAlert from '../../components/common-page/error-alert/error-alert';
function DynamicContentPage(props) {

     const blog = props.selectedBlog;
     if(!blog){
         return(
             <ErrorAlert>
                 <p>No blog found!!!</p> 
             </ErrorAlert>
         );
     }


    return (
      <Auxiliary>
        <BlogContent data={blog} />
      </Auxiliary>
    );
}

export async function getStaticProps(context){
    const blogId = context.params.blogId;
    const blog = await getBlogsById(blogId);
    return{
        props:{
            selectedBlog:blog
        },
        revalidate:30
    };

}


export async function getStaticPaths(){
    const blogs = await getAllBlogs();
    const paths = blogs.map((blog) => ({
      params: { blogId: blog.id.toString()},
    }));
    return {
        paths: paths,
        fallback: false
    };
}
export default DynamicContentPage;