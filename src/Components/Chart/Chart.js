import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./Chart.module.css";

const data = [
  {
    name: "January",
    Total: 1200,
  },
  {
    name: "February",
    Total: 1200,
  },
  {
    name: "March",
    Total: 1900,
  },
  {
    name: "April",
    Total: 200,
  },
  {
    name: "May",
    Total: 2100,
  },
  {
    name: "June",
    Total: 4200,
  },
];
const Chart = () => {
  return (
    <div className={styles.chart}>
      <div className={styles["chart-title"]}>Last 6 months revenue</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#cc3700" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#cc3700" stopOpacity={0.9} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />

          <CartesianGrid strokeDasharray="3 3" className={styles.grid} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#ff4500"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
