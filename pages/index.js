import Specialize from '../components/home-page/specialize/specialize';
import Auxiliary from '../hoc/Auxiliary/Auxiliary';
import Stats from '../components/home-page/stats/stats';
import CreativeProcess from '../components/home-page/creative-process/creative-process';
function HomePage() {
  return (
    <Auxiliary>
      <Specialize />
      <Stats/>
      <CreativeProcess/>
    </Auxiliary>
  );
}
export default HomePage;
