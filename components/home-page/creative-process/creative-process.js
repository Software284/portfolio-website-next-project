import HeaderFormat from "../../common-page/header-format/header-fromat";
import classes from './creative-process.module.css';
import CreativeFormat from "../../common-page/creative-format/creative-format";
import { creative_process } from "../../../all-array";
function CreativeProcess() {
  return (
    <section id="home-c" class="text-center py-2">
      <div class="container">
        <HeaderFormat
          title="My Creative Process"
          description="All of my UI/UX and design projects are based off a practised formula to get the 
          result that i am looking for"
        />
        <div className={classes.special}>
              {
                creative_process.map((creative)=> (
                <CreativeFormat icon={creative.icon} badge={creative.badge} heading={creative.heading} description={creative.description}/>
              ))
              }
        </div>
      </div>
    </section>
  );
}
export default CreativeProcess;
