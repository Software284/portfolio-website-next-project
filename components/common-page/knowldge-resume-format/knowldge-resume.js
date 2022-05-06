import classes from './knowldge-resume.module.css';
function KnowldgeResume(props){
    return (
      <div>
        <h3>
          <i class={props.icon}></i>{props.header}
        </h3>
        <p>
          {props.description}
        </p>
      </div>
    );
}
export default KnowldgeResume;