import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Header from '../../components/common-page/header/header';
import Projects from '../../components/work-page/projects/projects';
import Blog from '../../components/work-page/blogs/blogs';
import Footer from '../../components/common-page/footer/footer';
function WorkPage(){
    return(
        <Auxiliary>
            <Header/>
            <Projects/>
            <Blog/>
            <Footer/>
        </Auxiliary>
    );
}
export default WorkPage;