import classes from './knowldge-resume-section.module.css';
import HeaderFormat from '../../common-page/header-format/header-fromat';
import KnowldgeResume from '../../common-page/knowldge-resume-format/knowldge-resume';
import { knowldgeresume } from '../../../all-array';
function KnowldgeResumeSection(){
    return (
      <section id="knowldge-resume" class="text-center py-4">
        <div class="container">
          <HeaderFormat
            title="Knowldge Resume"
            description="Please feel free to visit my knowldge information"
          />
          <section id="timeline" className={classes.timeline+" "+classes.knowldge_resume}>
            <ul>
              {knowldgeresume.map((resume) => (
                <li key={resume.id} className={classes.show}>
                  <KnowldgeResume
                    icon={resume.icon}
                    header={resume.header}
                    description={resume.description}
                  />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    );
}
export default KnowldgeResumeSection;