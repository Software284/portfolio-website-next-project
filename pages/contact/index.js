import Auxuliary from '../../hoc/Auxiliary/Auxiliary';
import ContactMe from '../../components/contact-page/contact-me/contact-me';
import ContactMedium from '../../components/contact-page/contact-medium/contact-medium';
import TagLine from '../../components/contact-page/tagline/tagline';
import {getAllContactMedium} from '../../helpers/contact-page/contact-medium-api-utils';
function ContactPage(props){
    return (
      <Auxuliary>
        <ContactMe />
        <ContactMedium contact_medium={props.contact} />
        <TagLine />
      </Auxuliary>
    );
}

export async function getStaticProps() {
  const allcontactmedium = await getAllContactMedium();
  return {
    props: {
      contact: allcontactmedium,
    },
  };
}
export default ContactPage;