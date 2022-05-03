import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Header from '../../components/about-page/header/header';
import Projects from '../../components/work-page/projects/projects';
import Footer from '../../components/common-page/footer/footer';
function WorkPage(){
    return(
        <Auxiliary>
            <Header/>
            <Projects/>
            <Footer/>
        </Auxiliary>
    );
}
export default WorkPage;