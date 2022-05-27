import classes from './logos.module.css';
import Image from '../../common-page/image/image';
function Logos(props){
    return (
      <section id="logos" class="py-4 my-2 bg-light">
        <div class="container">
          <div className={classes.about_logos}>
            {
              props.partners.map((logo)=>(
                <Image image={logo.url} key={logo.id}/>
              ))
            }
          </div>
        </div>
      </section>
    );
}
export default Logos;