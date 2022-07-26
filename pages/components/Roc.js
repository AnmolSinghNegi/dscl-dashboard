import React from 'react'
import styles from "../../styles/Home.module.css";
import {Line} from "react-chartjs-2";
import {Doughnut} from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'

const data = {
	labels: ["Electric Bus", "Smart Pole", "Drainage Connectivity","Rejuvenation","Smart Waste Vehicle","Sewage","Citizen Outreach Program"],
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
			data: [20,23,28,25,7,9,24,35,5],
		},
	],
};

//doughnut chart data set


const data1 = {
	labels: ["Electric Bus", "Smart Pole", "Drainage Connectivity","Rejuvenation","Smart Waste Vehicle","Sewage","Citizen Outreach Program"],
	datasets: [
		{
			data: [23.30,57.20,17.35,21.19,21.28,30.30,1],
			backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#90ee90","#0000FF","#4b0082","#006400"],
			hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#90ee90","#0000FF","#4b0082","#006400"],
		},
	],
};
function Roc() {
    return (
        <div className={styles.contentcontainer}>
        <div className={styles.contentwrapper}>
            <div className={styles.tabs}>
                <div className={styles.categories}>
                    <h2>
                        <a href=''>
                          Electric Bus
                         </a>
                    </h2>
                </div>
            </div>
            <div className={styles.tabs}>
                <div className={styles.categories}>
                    <h2>Smart Pole</h2>
                </div>
            </div>
            <div className={styles.tabs}>
                <div className={styles.categories}>
                    <h2>Drainage Connectivity</h2>
                </div>
            </div>
            <div className={styles.tabs}>
                <div className={styles.categories}>
                    <h2>Rejuvenation</h2>
                </div>
            </div>
        </div>
        <div className={styles.contentcontainer}>
        <div className={styles.contentwrapper}>
            <div className={styles.tabs}>
                <div className={styles.categories}>
                    <h2>Smart Waste Vehicle</h2>
                </div>
            </div>
            <div className={styles.tabs}>
                <div className={styles.categories}>
                    <h2>Sewage</h2>
                </div>
            </div>
            <div className={styles.tabs}>
                <div className={styles.categories}>
                    <h2>Citizen Outreach Program</h2>
                </div>
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

export default Roc