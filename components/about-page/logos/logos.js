import classes from './logos.module.css';
import Image from '../../common-page/image/image';
function Logos(){
    return (
      <section id="logos" class="py-4 my-2 bg-light">
        <div class="container">
          <div className={classes.about_logos}>
            <Image image="img/about-logos/logo-envato.png" />
            <Image image="img/about-logos/logo-wordpress.png" />
            <Image image="img/about-logos/logo-woocommerce.png" />
            <Image image="img/about-logos/logo-magento.png" />
          </div>
        </div>
      </section>
    );
}
export default Logos;