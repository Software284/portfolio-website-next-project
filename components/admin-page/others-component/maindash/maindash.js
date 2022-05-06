import classes from './maindash.module.css';
import Cards from './cards/cards';
function MainDash(){
    return(
        <div className={classes.MainDash}>
            <h1>hehe </h1>
            <Cards/>
        </div>
    );
}
export default MainDash;