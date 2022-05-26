import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Projects from '../../components/work-page/projects/projects';
import Blog from '../../components/work-page/blogs/blogs';
import {getAllProjects} from '../../helpers/work-page/projects-api-utils';
function WorkPage(props){
    return(
        <Auxiliary>
            <Projects projects={props.projects}/>
            <Blog/>
        </Auxiliary>
    );
}

export async function getStaticProps() {
  const allprojects = await getAllProjects();
  return {
    props: {
      projects: allprojects,
    },
  };
}
export default WorkPage;