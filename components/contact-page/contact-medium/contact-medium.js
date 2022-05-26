import classes from './contact-medium.module.css';
import BoxContentFormat from '../../common-page/box-content-format/box-content-format';
import {contact_medium} from '../../../all-array';
function ContactMedium(){
    return (
      <section id="contact_info" class="text-center py-3 bg-dark">
        <div class="container">
          <div className={classes.contact_info}>
            {contact_medium.map((medium) => (
              <div key={medium.id}>
                <BoxContentFormat
                  icon={medium.icon}
                  heading={medium.heading}
                  description={medium.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
export default ContactMedium;