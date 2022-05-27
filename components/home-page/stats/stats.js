import BoxContentFormat from "../../common-page/box-content-format/box-content-format";
import classes from './stats.module.css';
import {
  faUsers,faAward,faHourglassStart,faCodeBranch,
}  from "@fortawesome/free-solid-svg-icons";
function Stats(props){ 
  const data = [faUsers,
faAward,
faHourglassStart,
faCodeBranch
];
    return (
      <section id="home-b" class="text-center py-2">
        <div class="container">
          <div className={classes.stats}>
              {props.stats.map((statistics) => (
                <div className={classes.hero} key={statistics.id}>
                <BoxContentFormat
                  icon={data[statistics.id-1]}
                  heading={statistics.heading}
                  description={statistics.description}
                />
                </div>
              ))}
          </div>
        </div>
      </section>
    );
}
export default Stats;