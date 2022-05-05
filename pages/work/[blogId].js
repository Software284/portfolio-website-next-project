import {useRouter} from 'next/router';
import Header from '../../components/common-page/header/header';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import BlogContent from '../../components/work-page/blogs-content/blogs-content';
import Footer from '../../components/common-page/footer/footer';
function DynamicContentPage() {
    const router= useRouter();
    const {blogId} = router.query;
    // const blogId = router.query.blogId;


    return (
        <Auxiliary>
            <Header/>
            <BlogContent id={blogId}/>
            <Footer/>
        </Auxiliary>
       
    );
}
export default DynamicContentPage;