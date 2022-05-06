import classes from './cv-format.module.css';
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function CVFormat(props){
    let component1=null;
    let component2=null;
    if(props.btn_prev){
        component1 = <a href={props.btn_prev} class="btn btn-dark">
                      Prev Page&nbsp; <FontAwesomeIcon icon={faArrowCircleDown}></FontAwesomeIcon>
                    </a>
    }


    if(props.btn_next){
        component2 = (
          <a href={props.btn_next} class="btn">
            Next Page &nbsp;
            <FontAwesomeIcon
              icon={faArrowCircleUp}
            ></FontAwesomeIcon>
            
          </a>
        );
    }

    return (
      <section id={props.section_id} class={props.section_class}>
        <h1>{props.header}</h1>
        <p>{props.description}</p>
        <div>
          {component1}
          {component2}
        </div>
      </section>
    );
}
export default CVFormat;