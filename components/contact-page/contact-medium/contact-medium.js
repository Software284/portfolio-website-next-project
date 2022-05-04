import classes from './contact-medium.module.css';
import BoxFormat from '../../common-page/box-content-format/box-content-format';
import {faEnvelope,faPhone,faAddressCard} from '@fortawesome/free-solid-svg-icons';

function ContactMedium(){
    return (
      <section id="contact_info" class="text-center py-3 bg-dark">
        <div class="container">
          <div className={classes.contact_info}>
            <div>
              <BoxFormat
                icon={faEnvelope}
                heading="Email"
                description="maheshlamichhane048@gmail.com"
              />
            </div>
            <div>
              <BoxFormat
                icon={faPhone}
                heading="Phone"
                description="(+977) 9818567284"
              />
            </div>
            <div>
              <BoxFormat
                icon={faAddressCard}
                heading="Address"
                description="Narayansthan-8, Baglung, Nepal"
              />
            </div>
          </div>
        </div>
      </section>
    );
}
export default ContactMedium;