import classes from './technical-skill.module.css';
import HeaderFormat from '../../common-page/header-format/header-fromat';
import ProgressBar from '../../common-page/progress-bar/progress-bar';
import { skill_progressbar } from '../../../all-array';
function TechnicalSkill(){
  
    return (
      <section className={classes.technical_skill + " bg-dark py-3"}>
        <div class="container text-center">
          <HeaderFormat
            title="Technical Skill"
            description="These are all my technical skill."
          />
          {skill_progressbar.map((progress) => (
            <ProgressBar title={progress.title} percent={progress.percent} key={progress.id} />
          ))}
        </div>
      </section>
    );
}
export default TechnicalSkill;