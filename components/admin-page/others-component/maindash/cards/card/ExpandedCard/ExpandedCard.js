import classes from './ExpandedCard.module.css';
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { UilTimes } from "@iconscout/react-unicons";
import dynamic from "next/dynamic";
import { motion} from "framer-motion";
function ExpandedCard({ param, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };

  return (
    <motion.div
      className={classes.ExpandedCard}
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span
        style={{
          color: "white",
          fontSize: "26px",
          fontWeight: "bold",
          textShadow: "0px 0px 15px white",
        }}
      >
        {param.title}
      </span>
      <div className={classes.chartContainer}>
        <Chart options={data.options} series={param.series} type="area" />
      </div>
      <span
        style={{
          fontSize: "16px",
          color: "white",
        }}
      >
        Last 24 hours
      </span>
    </motion.div>
  );
}

export default ExpandedCard;
