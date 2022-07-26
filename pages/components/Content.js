import React from 'react'
import styles from "../../styles/Home.module.css";
import {Line} from "react-chartjs-2";
import {Doughnut} from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'

const data = {
	labels: [
		"Water Augumentation",
        "Smart Toilet",
        "SCADA"
	],
	datasets: [
		{
			label: "Financial Progress (%)",
			fill: true,
			lineTension: 0.1,
			backgroundColor: "rgba(75,192,192,0.4)",
			borderColor: "rgba(75,192,192,1)",
			borderCapStyle: "butt",
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: "miter",
			pointBorderColor: "rgba(75,192,192,1)",
			pointBackgroundColor: "#fff",
			pointBorderWidth: 0,
			pointHoverRadius: 0,
			pointHoverBackgroundColor: "rgba(75,192,192,1)",
			pointHoverBorderColor: "rgba(220,220,220,1)",
			pointHoverBorderWidth: 0,
			pointRadius: 0,
			pointHitRadius: 0,
			data: [60,40,72,35],
		},
	],
};

//doughnut chart data set


const data1 = {
	labels: ["Water Augumentation","Smart Toilet","SCADA"],
	datasets: [
		{
			data: [36.40,1.81,22.38],
			backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
			hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
		},
	],
};
function MainContent() {
  return (
    <div className={styles.contentcontainer}>
    <div className={styles.contentwrapper}>
        <div className={styles.tabs}>
            <div className={styles.categories}>
                <h2>
                    <a href=''>
                        Water Augmentation
                     </a>
                </h2>
            </div>
        </div>
        <div className={styles.tabs}>
            <div className={styles.categories}>
                <h2>Smart Toilet</h2>
            </div>
        </div>
        <div className={styles.tabs}>
            <div className={styles.categories}>
                <h2>SCADA</h2>
            </div>
        </div>
    </div>
    <div className={styles.charts}>
				<div className={styles.bar}>
					<h2>Financial Progress</h2>
					<Line data={data}width={550} height={550}/>
				</div>
				<div className={styles.circle}>
					<h2>Project Cost (in Cr)</h2>
                    <Doughnut data={data1}width={550} height={550} />
					
				</div>
			</div>
		</div>
	);
}
export default MainContent