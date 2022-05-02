import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function BoxContentFormat(props){
    return (
      <Auxiliary>
        <i>
          <FontAwesomeIcon
            style={{
              fontSize: "30px",
              paddingBottom: "0.4rem",
            }}
            icon={props.icon}
          ></FontAwesomeIcon>
        </i>
        <h3>{props.heading}</h3>
        <p>{props.description}</p>
      </Auxiliary>
    );
}
export default BoxContentFormat;