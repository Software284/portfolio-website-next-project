import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from './SocialMediaIcon.module.css';
function SocialMediaIcon() {
  return (
    <div className={classes.social}>
      <div>
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{
            fontSize: "20px",
            
          }}
        />
      </div>
      <div>
        <FontAwesomeIcon
          icon={faFacebook}
          style={{
            fontSize: "20px",
          }}
        />
      </div>

      <div>
        <FontAwesomeIcon
          icon={faTwitter}
          style={{
            fontSize: "20px",
          }}
        />
      </div>

      <div>
        <FontAwesomeIcon
          icon={faInstagram}
          style={{
            fontSize: "20px",
          }}
        />
      </div>
    </div>
  );
}
export default SocialMediaIcon;
