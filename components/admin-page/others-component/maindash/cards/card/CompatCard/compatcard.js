import { CircularProgressbar } from "react-circular-progressbar";
import classes from './compatcard.module.css';
import { motion } from "framer-motion";
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      className={classes.CompatCard}
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className={classes.radialBar}>
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className={classes.detail}>
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}
export default CompactCard;
