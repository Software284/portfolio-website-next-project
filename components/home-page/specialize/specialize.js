import BoxContentFormat from "../../common-page/box-content-format/box-content-format";
import HeaderFormat from "../../common-page/header-format/header-fromat";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faObjectUngroup } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import classes from './specialize.module.css';
function Specialize(){
    return (
      <section id="home-a" class="text-center py-2">
        <div class="container">
          <HeaderFormat
            title="I Specialize In"
            description="Photographey as well as creating digital masterpieces and UI/UX layouts for websites and 
          mobile applications"
          />
          <div className={classes.special}>
            <div>
              <BoxContentFormat
                icon={faFile}
                heading="Concepting"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut autem quae ea ut eos beatae debitis quis facilis laboriosam voluptatum."
              />
            </div>
            <div>
              <BoxContentFormat
                icon={faDesktop}
                heading="Visual Design"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut autem quae ea ut eos beatae debitis quis facilis laboriosam voluptatum."
              />
            </div>
            <div>
              <BoxContentFormat
                icon={faObjectUngroup}
                heading="UI/UX"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut autem quae ea ut eos beatae debitis quis facilis laboriosam voluptatum."
              />
            </div>
            <div>
              <BoxContentFormat
                icon={faThumbsUp}
                heading="Interaction"
                description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut autem quae ea ut eos beatae debitis quis facilis laboriosam voluptatum."
              />
            </div>
          </div>
        </div>
      </section>
    );
}
export default Specialize;