import classes from './project-item.module.css';
function ProjectItem(props){
    return(
        <div class="item">
          <div class="item-image">
            <img src={props.image_address} alt=""/>
          </div>
          <div class="item-text">
            <div class="item-text-wrap">
              <p class="item-text-category">{props.description}</p>
              <h2 class="item-text-title">{props.title}</h2>
            </div>
          </div>
        </div>
    );
}
export default ProjectItem;