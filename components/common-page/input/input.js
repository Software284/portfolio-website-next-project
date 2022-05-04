import classes from './input.module.css';
function Input(props){
    return <input type={props.type}  placeholder={props.placeholder} class={props.class}/>;
}
export default Input;