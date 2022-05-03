import classes from './image.module.css';
function Image(props){
    return(
        <img src={props.image}></img>
    );
}
export default Image;