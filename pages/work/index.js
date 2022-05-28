import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Projects from '../../components/work-page/projects/projects';
import Blog from '../../components/work-page/blogs/blogs';
import {getAllProjects} from '../../helpers/work-page/projects-api-utils';
import {getAllBlogs} from '../../helpers/work-page/blogs-api-utils';
function WorkPage(props){
    return(
        <Auxiliary>
            <Projects projects={props.projects}/>
            <Blog blogs = {props.blogs}/>
        </Auxiliary>
    );
}

export async function getStaticProps() {
  const allprojects = await getAllProjects();
  const allblogs = await getAllBlogs();
  return {
    props: {
      projects: allprojects,
      blogs: allblogs
    },
  };
}
export default WorkPage;