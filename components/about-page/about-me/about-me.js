import classes from './about-me.module.css';
import HeaderFormat from '../../common-page/header-format/header-fromat';
import BoxContentFormat from '../../common-page/box-content-format/box-content-format';
import { faAward } from "@fortawesome/free-solid-svg-icons";
function AboutMe(){
    return (
      <section id="about-me" class="text-center py-3">
        <div class="container">
          <HeaderFormat
            title="About Me"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, molestiae!"
          />
          <div className={classes.about_content_one}>
            <img src="img/about.jpg" alt="" class="bio-image"></img>
            <div className={classes.bio + " bg-light"}>
              <h4>Your Projects Is In Safe Hands</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
                voluptates distinctio. Consequuntur, quam, cumque consequatur ex
                fugiat beatae assumenda, enim odio cum eaque laborum quis omnis
                tempora amet porro? Eum!
              </p>
            </div>
          </div>
          <div className={classes.award + " py-3"}>
            <div className={classes.item}>
              <BoxContentFormat
                icon={faAward}
                heading="Award One"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, libero."
              />
            </div>

            <div className={classes.item}>
              <BoxContentFormat
                icon={faAward}
                heading="Award Two"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, libero."
              />
            </div>

            <div className={classes.item}>
              <BoxContentFormat
                icon={faAward}
                heading="Award Three"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, libero."
              />
            </div>
          </div>
        </div>
      </section>
    );
}
export default AboutMe;