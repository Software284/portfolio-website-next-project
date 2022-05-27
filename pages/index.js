import Specialize from '../components/home-page/specialize/specialize';
import Auxiliary from '../hoc/Auxiliary/Auxiliary';
import Stats from '../components/home-page/stats/stats';
import CreativeProcess from '../components/home-page/creative-process/creative-process';
import {getAllStats} from '../helpers/home-page/stats-api-utils';
function HomePage(props) {
  return (
    <Auxiliary>
      <Specialize/>
      <Stats stats ={props.stats}/>
      <CreativeProcess/>
    </Auxiliary>
  );
}

export async function getStaticProps(){
  const allstats = await getAllStats();
  return {
    props:{
      stats:allstats
    },
    revalidate:30
  }
}
export default HomePage;
