import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Header from '../../components/common-page/header/header';
import Blog from '../../components/blog-page/blogs/blogs';
import Footer from '../../components/common-page/footer/footer';
function MyBlogPost(){
    return (
        <Auxiliary>
            <Header/>
            <Blog/>
            <Footer/>
        </Auxiliary>
    );
}
export default MyBlogPost;