import classes from './technical-skill.module.css';
import HeaderFormat from '../../common-page/header-format/header-fromat';
import ProgressBar from '../../common-page/progress-bar/progress-bar';
function TechnicalSkill(){
    return (
      <section className={classes.technical_skill + " bg-dark py-3"}>
        <div class="container text-center">
          <HeaderFormat
            title="Technical Skill"
            description="These are all my technical skill."
          />
          <ProgressBar title="Html & Css" percent="100%" />
          <ProgressBar title="Javascript" percent="60%" />
          <ProgressBar title="Java" percent="100%" />
          <ProgressBar title="Flutter" percent="60%" />
          <ProgressBar title="Dart" percent="30%" />
          <ProgressBar title="Oracle" percent="80%" />
          <ProgressBar title="Spring Framework" percent="90%" />
        </div>
      </section>
    );
}
export default TechnicalSkill;