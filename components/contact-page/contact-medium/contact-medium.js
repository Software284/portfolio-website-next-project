import classes from './contact-medium.module.css';
import BoxContentFormat from '../../common-page/box-content-format/box-content-format';

function ContactMedium(props){
    return (
      <section id="contact_info" class="text-center py-3 bg-dark">
        <div class="container">
          <div className={classes.contact_info}>
            {props.contact_medium.map((medium) => (
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