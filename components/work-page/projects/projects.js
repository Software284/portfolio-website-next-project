import classes from './projects.module.css';
import HeaderForamt from '../../common-page/header-format/header-fromat';
import ProjectItem from '../../common-page/project-item/project-item';
import { projects } from '../../../all-array';
function Projects(){
    return (
      <section id="projects" class="text-center py-3">
        <div class="container">
          <HeaderForamt
            title="PROJECTS"
            description="Check out some of my projects"
          />
          <div class="items">
            {projects.map((project) => (
              <ProjectItem
                key={project.id}
                image_address={project.image_address}
                description={project.description}
                title={project.title}
              />
            ))}
          </div>
        </div>
      </section>
    );
}
export default Projects;