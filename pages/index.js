import Specialize from '../components/home-page/specialize/specialize';
import Auxiliary from '../hoc/Auxiliary/Auxiliary';
import Stats from '../components/home-page/stats/stats';
import CreativeProcess from '../components/home-page/creative-process/creative-process';
import {getAllSpecialize} from '../helpers/home-page/specialize-api-utils';
import {getAllStats} from '../helpers/home-page/stats-api-utils';
import {getAllCreativeProcess} from '../helpers/home-page/creative-process-api-utils';
function HomePage(props) {
  return (
    <Auxiliary>
      <Specialize specialize={props.specialize} />
      <Stats stats ={props.stats}/>
      <CreativeProcess creative_process={props.creative_process} />
    </Auxiliary>
  );
}

export async function getStaticProps(){
  const allspecialize = await getAllSpecialize();
  const allstats = await getAllStats();
  const allcreativeprocess = await getAllCreativeProcess();
  return {
    props:{
      specialize:allspecialize,
      stats:allstats,
      creative_process:allcreativeprocess
    }
  }
}
export default HomePage;
