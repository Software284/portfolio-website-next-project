import classes from './updates.module.css';
import {UpdatesData} from '../../../../../all-array';
function Updates(){
    return (
      <div className={classes.Updates}>
        {UpdatesData.map((data) => {
          return (
            <div className={classes.Update}>
              <img src={data.img} alt="" />
              <div className={classes.Noti}>
                <div style={{ marginBottom: "0.5rem" }}>
                  <span>{`${data.name}` + " "} </span>
                  <span>{data.noti}</span>
                </div>
                <span>{data.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
}
export default Updates;