import HeaderFormat from "../../common-page/header-format/header-fromat";
import BoxContentFormat from "../../common-page/box-content-format/box-content-format";
import { faFileAlt, faObjectGroup } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faObjectUngroup } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import classes from './creative-process.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CreativeProcess() {
  return (
    <section id="home-c" class="text-center py-2">
      <div class="container">
        <HeaderFormat
          title="My Creative Process"
          description="All of my UI/UX and design projects are based off a practised formula to get the 
          result that i am looking for"
        />
        <div className={classes.special}>
          <div>
            <div className={classes.process_icon}>
              <FontAwesomeIcon
                style={{
                  fontSize: "70px",
                }}
                icon={faFileAlt}
              ></FontAwesomeIcon>
              <div className={classes.process_step}>1</div>
            </div>
            <h3>Discuss The Project</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
              assumenda quae laudantium sequi consequatur aut a saepe ab odit.
              Laborum!
            </p>
          </div>

          <div>
            <div className={classes.process_icon}>
              <FontAwesomeIcon
                style={{
                  fontSize: "70px",
                }}
                icon={faDesktop}
              ></FontAwesomeIcon>
              <div className={classes.process_step}>6</div>
            </div>
            <h3>Brainstorming ^ Concept</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
              assumenda quae laudantium sequi consequatur aut a saepe ab odit.
              Laborum!
            </p>
          </div>

          <div>
            <div className={classes.process_icon}>
              <FontAwesomeIcon
                style={{
                  fontSize: "70px",
                }}
                icon={faObjectGroup}
              ></FontAwesomeIcon>
              <div className={classes.process_step}>3</div>
            </div>
            <h3>Interactions</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
              assumenda quae laudantium sequi consequatur aut a saepe ab odit.
              Laborum!
            </p>
          </div>

          <div>
            <div className={classes.process_icon}>
              <FontAwesomeIcon
                style={{
                  fontSize: "70px",
                }}
                icon={faThumbsUp}
              ></FontAwesomeIcon>
              <div className={classes.process_step}>5</div>
            </div>
            <h3>UI/UX Planning</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
              assumenda quae laudantium sequi consequatur aut a saepe ab odit.
              Laborum!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CreativeProcess;
