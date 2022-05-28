import Header from '../../components/common-page/header/header';
import AboutMe from '../../components/about-page/about-me/about-me';
import TechnicalSkill from '../../components/about-page/technical-skill/technical-skill';
import Logos from '../../components/about-page/logos/logos';
import Testimonials from '../../components/about-page/testimonials/testimonials';
import {getAllAwards} from '../../helpers/about-page/awards-api-utils';
import {getAllSkillProgressbarData} from '../../helpers/about-page/skill-progressbar-api-utils';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import {getAllTestimonials} from '../../helpers/about-page/testimonials.api-utils';
import {getAllPartners} from '../../helpers/about-page/partners-api-utils';
function AboutPage(props){
    return (
      <Auxiliary>
        <AboutMe awards={props.award} />
        <TechnicalSkill skill_progressbar={props.skill} />
        <Logos partners = {props.partner}/>
        <Testimonials testimonials={props.testi}/>
      </Auxiliary>
    );
}

export async function getStaticProps() {
  const allawards = await getAllAwards();
  const allskillprogressbar = await getAllSkillProgressbarData();
  const alltestimonials = await getAllTestimonials();
  const allpartners = await getAllPartners();
  return {
    props: {
      award: allawards,
      skill: allskillprogressbar,
      testi: alltestimonials,
      partner: allpartners,
    },
  };
}
export default AboutPage;