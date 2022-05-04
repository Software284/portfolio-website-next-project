import classes from './textarea.module.css';
function TextArea(props){
    return <textarea class={props.class}>{props.placeholder}</textarea>;
}
export default TextArea;