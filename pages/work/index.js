import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Projects from '../../components/work-page/projects/projects';
import Blog from '../../components/work-page/blogs/blogs';
function WorkPage(){
    return(
        <Auxiliary>
            <Projects/>
            <Blog/>
        </Auxiliary>
    );
}
export default WorkPage;