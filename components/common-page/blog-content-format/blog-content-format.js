import classes from './blog-content-format.module.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Image from '../../common-page/image/image';
function BlogContentFormat(props){

    const { date } = props;

    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });

    return (
      <Auxiliary>
        <Image image={props.url} />
        <h2>{props.title}</h2>
        <p className={classes.mylead}>{props.description}</p>
        <div className={classes.cont}>
          <div>{props.location}</div>
          <div>{humanReadableDate}</div>
        </div>
      </Auxiliary>
    );
}
export default BlogContentFormat;