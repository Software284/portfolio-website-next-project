import classes from './cv.module.css';
import HeaderFormat from '../../common-page/header-format/header-fromat';
import CVFormat from '../../common-page/cv-format/cv-format';
import { cv } from '../../../all-array';
function CV(){

    return (
      <section id="cv" class="text-center py-4">
        <div class="container">
          <HeaderFormat
            title="Curriculam Vatae"
            description="Please feel free to explore my cv information"
          />
          <div className={classes.hero}>
            {cv.map((cvitem) => (
              <CVFormat
                key={cvitem.id}
                id={cvitem.id}
                section_id={cvitem.section_id}
                section_class={cvitem.section_class}
                header={cvitem.header}
                description={cvitem.description}
                btn_prev={cvitem.btn_prev}
                btn_next={cvitem.btn_next}
              />
            ))}
          </div>
        </div>
      </section>
    );
}
export default CV;