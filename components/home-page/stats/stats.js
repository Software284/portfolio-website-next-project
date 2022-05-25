import BoxContentFormat from "../../common-page/box-content-format/box-content-format";
import classes from './stats.module.css';
function Stats(props){ 
    return (
      <section id="home-b" class="text-center py-2">
        <div class="container">
          <div className={classes.stats}>
              {props.stats.map((statistics) => (
                <div className={classes.hero} key={statistics.id}>
                <BoxContentFormat
                  icon={statistics.icon}
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