import React from 'react'
import styles from "../../styles/Home.module.css";
import {Line} from "react-chartjs-2";
import {Doughnut} from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'

const data = {
	labels: ["Green Building", "Plantation Project", "Solar Rooftop","Facade Rejuvenation","City Singnage","Installation of Smart Solution"],
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
			data: [10,0,0,0,0,0,30],
		},
	],
};

//doughnut chart data set


const data1 = {
	labels: ["Green Building", "Plantation Project", "Solar Rooftop","Facade Rejuvenation","City Singnage","Installation of Smart Solution"],
	datasets: [
		{
			data: [204.46,5.00,4.99,5,4.94,12.33],
			backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#90ee90","#0000FF","#006400"],
			hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#90ee90","#0000FF","#006400"],
		},
	],
};
function Yet() {
  return (
    <div className={styles.contentcontainer}>
    <div className={styles.contentwrapper}>
        <div className={styles.tabs}>
            <div className={styles.categories}>
                <h2>
                    <a href=''>Green Building
                     </a>
                </h2>
            </div>
        </div>
        <div className={styles.tabs}>
            <div className={styles.categories}>
                <h2>Plantation Project</h2>
            </div>
        </div>
        <div className={styles.tabs}>
            <div className={styles.categories}>
                <h2>Solar Rooftop</h2>
            </div>
        </div>
        <div className={styles.tabs}>
            <div className={styles.categories}>
                <h2>Facade Rejuvenation</h2>
            </div>
        </div>
    </div>
    <div className={styles.contentwrapper}>
        <div className={styles.tabs}>
            <div className={styles.categories}>
                <h2>
                    <a href=''>City Singnage
                     </a>
                </h2>
            </div>
        </div>
        <div className={styles.tabs}>
            <div className={styles.categories}>
                <h2>Installation of Smart Solution</h2>
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
export default Yet