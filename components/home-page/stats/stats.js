import BoxContentFormat from "../../common-page/box-content-format/box-content-format";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faHourglassStart} from "@fortawesome/free-solid-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import classes from './stats.module.css';
function Stats(){
    return (
      <section id="home-b" class="text-center py-2">
        <div class="container">
          <div className={classes.stats}>
            <div className={classes.hero}>
              <BoxContentFormat
                icon={faUsers}
                heading="Clients"
                description="100"
              />
            </div>
            <div className={classes.hero}>
              <BoxContentFormat
                icon={faAward}
                heading="Award"
                description="3"
              />
            </div>
            <div className={classes.hero}>
              <BoxContentFormat
                icon={faHourglassStart}
                heading="Hours Worked"
                description="3500"
              />
            </div>
            <div className={classes.hero}>
              <BoxContentFormat
                icon={faCodeBranch}
                heading="Projects Completed"
                description="135"
              />
            </div>
          </div>
        </div>
      </section>
    );
}
export default Stats;