import Header from '../../components/about-page/header/header';
import AboutMe from '../../components/about-page/about-me/about-me';
import TechnicalSkill from '../../components/about-page/technical-skill/technical-skill';
import Logos from '../../components/about-page/logos/logos';
import Testimonials from '../../components/about-page/testimonials/testimonials';
import Footer from '../../components/common-page/footer/footer';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
function AboutPage(){
    return (
      <Auxiliary>
        <Header />
        <AboutMe />
        <TechnicalSkill />
        <Logos/>
        <Testimonials/>
        <Footer/>
      </Auxiliary>
    );
}
export default AboutPage;