import classes from './contact-me.module.css';
import Input from '../../common-page/input/input';
import TextArea from '../../common-page/textarea/textarea';
import HeaderFormat from '../../common-page/header-format/header-fromat';
function ContactMe(){
    return (
      <div id="contact" class="text-center py-3">
        <div class="container">
          <HeaderFormat
            title="CONTACT ME"
            description="Here is how you can reach me."
          />
          <form>
            <div className={classes.text_fields}>

              <input
                type="text"
                className={classes.text_input + " " + classes.name_input}
                placeholder="Name"
              />
              <input
                type="text"
                className={classes.text_input + " " + classes.subject_input}
                placeholder="Subject"
              />
              <input
                type="email"
                className={classes.text_input + " " + classes.email_input}
                placeholder="Email Address"
              />
              <input
                type="text"
                className={classes.text_input + " " + classes.phone_input}
                placeholder="Phone Number"
              />
              <textarea
                className={classes.text_input + " " + classes.message_input}
                placeholder="Enter Message"
              ></textarea>
              {/* <Input
                type="text"
                placeholder="Name"
                class="name_input text_input"
              />
              <Input
                type="email"
                placeholder="Email Address"
                class="email_input text_input"
              />

              <Input
                type="text"
                placeholder="Subject"
                class="subject_input text_input"
              />
              <Input
                type="text"
                placeholder="Phone Number"
                class="number_input text_input"
              />
              <TextArea
                placeholder="Enter Message"
                class="message_input text_input"
              /> */}
            </div>
            <button type="submit" class={classes.btn+" "+"btn-dark"}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
}
export default ContactMe;