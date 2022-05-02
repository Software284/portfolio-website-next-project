import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
function HeaderFormat(props){
    return (
      <Auxiliary>
        <h2 class="section-title">{props.title}</h2>
        <div class="bottom-line"></div>
        <p class="lead">
          {props.description}
        </p>
      </Auxiliary>
    );
}
export default HeaderFormat;