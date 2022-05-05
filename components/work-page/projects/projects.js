import classes from './projects.module.css';
import HeaderForamt from '../../common-page/header-format/header-fromat';
import ProjectItem from '../../common-page/project-item/project-item';
function Projects(){
  const projects = [
    {
      id: "1",
      image_address: "img/items/item1.png",
      description: "Design",
      title: "Great Gradients",
    },
    {
      id: "2",
      image_address: "img/items/item2.png",
      description: "UI/UX",
      title: "World Experience",
    },
    {
      id: "3",
      image_address: "img/items/item3.png",
      description: "Photogrphy & Design",
      title: "Vanishing",
    },
    {
      id: "4",
      image_address: "img/items/item4.png",
      description: "Design",
      title: "Gap INC",
    },
    {
      id: "5",
      image_address: "img/items/item5.png",
      description: "Mobile UI Design",
      title: "Face The Experience",
    },
    {
      id: "6",
      image_address: "img/items/item6.png",
      description: "Design Concept",
      title: "Bezier Curves",
    },
    {
      id: "7",
      image_address: "img/items/item7.png",
      description: "Photogrphy",
      title: "Dock Ponder",
    },
    {
      id: "8",
      image_address: "img/items/item8.png",
      description: "Web Applications",
      title: "Restaurant App",
    },
    {
      id: "9",
      image_address: "img/items/item9.png",
      description: "Social Network Concept",
      title: "FriendFeed",
    },
  ];
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