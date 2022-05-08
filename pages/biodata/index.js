import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Header from '../../components/common-page/header/header';
import KnowldgeResumeSection from '../../components/biodata-page/knowldge-resume/knowldge-resume-section';
import CV from '../../components/biodata-page/cv/cv';
import Footer from '../../components/common-page/footer/footer';
function MyBioData(){
    return (
        <Auxiliary>
            <KnowldgeResumeSection/>
            <CV/>
        </Auxiliary>
    );
}
export default MyBioData;