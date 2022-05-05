import classes from './logos.module.css';
import Image from '../../common-page/image/image';
import { logos } from '../../../all-array';
function Logos(){
    return (
      <section id="logos" class="py-4 my-2 bg-light">
        <div class="container">
          <div className={classes.about_logos}>
            {
              logos.map((logo)=>(
                <Image image={logo.url} key={logo.id}/>
              ))
            }
          </div>
        </div>
      </section>
    );
}
export default Logos;