import BoxContentFormat from "../../common-page/box-content-format/box-content-format";
import HeaderFormat from "../../common-page/header-format/header-fromat";
import classes from './specialize.module.css';
import {specialize} from "../../../all-array";
function Specialize(){
    return (
      <section id="home-a" class="text-center py-2">
        <div class="container">
          <HeaderFormat
            title="I Specialize In"
            description="Photographey as well as creating digital masterpieces and UI/UX layouts for websites and 
          mobile applications"
          />
          <div className={classes.special}>
            {specialize.map((special) => (
              <div>
                <BoxContentFormat
                  icon={special.icon}
                  heading={special.heading}
                  description={special.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

// export async function getStaticProps(){
//   const specialize = await getAllSpecialize();
//   return {
//     props: {
//       specialize: specialize
//     },
//   };
// }
export default Specialize;