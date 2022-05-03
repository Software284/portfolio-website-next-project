import classes from './progress-bar.module.css';
function ProgressBar(props){
    return (
      <h4>
        {props.title}
        <div className={classes.progress}>
          <div style={{width:props.percent}}></div>
        </div>
      </h4>
    );
}
export default ProgressBar;