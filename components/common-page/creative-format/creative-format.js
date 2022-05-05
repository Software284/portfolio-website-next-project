import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from './creative-format.module.css';
function CreativeFormat(props){
    return (
      <Auxiliary>
        <div className={classes.item}>
          <div className={classes.process_icon}>
            <FontAwesomeIcon
              style={{
                fontSize: "70px",
              }}
              icon={props.icon}
            ></FontAwesomeIcon>
            <div className={classes.process_step}>{props.badge}</div>
          </div>
          <h3>{props.heading}</h3>
          <p>{props.description}</p>
        </div>
      </Auxiliary>
    );
}
export default CreativeFormat;