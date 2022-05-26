import Auxuliary from '../../hoc/Auxiliary/Auxiliary';
import ContactMe from '../../components/contact-page/contact-me/contact-me';
import ContactMedium from '../../components/contact-page/contact-medium/contact-medium';
import TagLine from '../../components/contact-page/tagline/tagline';
function ContactPage(){
    return (
      <Auxuliary>
        <ContactMe />
        <ContactMedium />
        <TagLine />
      </Auxuliary>
    );
}
export default ContactPage;