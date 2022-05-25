import classes from './knowldge-resume-section.module.css';
import HeaderFormat from '../../common-page/header-format/header-fromat';
import KnowldgeResume from '../../common-page/knowldge-resume-format/knowldge-resume';
function KnowldgeResumeSection(props){
    return (
      <section id="knowldge-resume" class="text-center py-4">
        <div class="container">
          <HeaderFormat
            title="Knowldge Resume"
            description="Please feel free to visit my knowldge information"
          />
          <section id="timeline" className={classes.timeline+" "+classes.knowldge_resume}>
            <ul>
              {props.knowldge_resume.map((resume) => (
                <li key={resume.id} className={classes.show}>
                  <KnowldgeResume
                    icon={resume.icon}
                    header={resume.heading}
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