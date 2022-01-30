import ChartBar from "./ChartBar.js";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(d => d.value);
  const maxExpense = Math.max(...dataPointValues)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxExpense}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
