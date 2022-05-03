import classes from './testimonial-format.module.css';
import Image from '../../common-page/image/image';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
function TestimonialFormat(props){
    return(
        <Auxiliary>
            <p>{props.message}</p>
            <ul>
              <li><Image image={props.image}/></li>
              <li>{props.address}</li>
            </ul>
        </Auxiliary>
         
    );
}
export default TestimonialFormat;