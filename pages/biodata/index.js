import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import KnowldgeResumeSection from '../../components/biodata-page/knowldge-resume/knowldge-resume-section';
import CV from '../../components/biodata-page/cv/cv';
import {getAllKnowldgeResume} from '../../helpers/biodata-page/knowldge-resume-api-utils';
function MyBioData(props){
    return (
        <Auxiliary>
            <KnowldgeResumeSection knowldge_resume={props.knowldge_resume}/>
            <CV/>
        </Auxiliary>
    );
}

export async function getStaticProps() {
  const allknowldgeresume = await getAllKnowldgeResume();
  return {
    props: {
      knowldge_resume: allknowldgeresume,
    },
  };
}

export default MyBioData;