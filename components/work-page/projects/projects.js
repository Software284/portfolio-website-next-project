import classes from './projects.module.css';
import HeaderForamt from '../../common-page/header-format/header-fromat';
import ProjectItem from '../../common-page/project-item/project-item';
function Projects(){
    return (
      <section id="projects" class="text-center py-3">
        <div class="container">
          <HeaderForamt
            title="PROJECTS"
            description="Check out some of my projects"
          />
          <div class="items">
            <ProjectItem
              image_address="img/items/item1.png"
              description="Design"
              title="Great Gradients"
            />
            <ProjectItem
              image_address="img/items/item2.png"
              description="UI/UX"
              title="World Experience"
            />
            <ProjectItem
              image_address="img/items/item3.png"
              description="Photogrphy & Design"
              title="Vanishing"
            />
            <ProjectItem
              image_address="img/items/item4.png"
              description="Design"
              title="Gap INC"
            />
            <ProjectItem
              image_address="img/items/item5.png"
              description="Mobile UI Design"
              title="Face The Experience"
            />
            <ProjectItem
              image_address="img/items/item6.png"
              description="Design Concept"
              title="Bezier Curves"
            />
            <ProjectItem
              image_address="img/items/item7.png"
              description="Photogrphy"
              title="Dock Ponder"
            />
            <ProjectItem
              image_address="img/items/item8.png"
              description="Web Applications"
              title="Restaurant App"
            />
            <ProjectItem
              image_address="img/items/item9.png"
              description="Social Network Concept"
              title="FriendFeed"
            />
          </div>
        </div>
      </section>
    );
}
export default Projects;