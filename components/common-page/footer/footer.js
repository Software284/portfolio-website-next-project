
import SocialMediaIcon from "./social-media-icon/SocialMediaIcon";
import CopyRight from "./copyright/copyright";
import classes from './footer.module.css';
function Footer() {
  return (
    <footer className={classes.main_footer}>
      <div className={classes.main_content+" container"}>
        <CopyRight/>
        <SocialMediaIcon/>
      </div>
    </footer>
  );
}
export default Footer;
