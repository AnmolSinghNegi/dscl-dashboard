import React from 'react';
import styles from "../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBookOpen,
	faCog,
	faHeart,
	faPercent,
	faPercentage,
	faRocket,
	faSignOutAlt,
	faTachometerAlt,
    faTicket,
} from "@fortawesome/free-solid-svg-icons";


function LeftNavbar() {
  return (
    <div className={styles.navcontainer}>
        <div className={styles.logo}>
            <h2  className={styles.q0}>Projects</h2>
        </div>
        <div className={styles.wrapper}>
            <ul>
                <li>
                    <FontAwesomeIcon
							icon={faTicket}
							style={{ width: "18px", cursor: "pointer" }}
                            className={styles.q1}
						/>{" "}
                    <a href='/'>100% Completed</a>
                </li>
                <li>
                    <FontAwesomeIcon
							icon={faTicket}
							style={{ width: "18px", cursor: "pointer" }}
                            className={styles.q2}
						/>{" "}
                    <a href='/page2'>70% to 99% Completed</a>
                </li>
                <li  >
                    <FontAwesomeIcon
							icon={faTicket}
							style={{ width: "18px", cursor: "pointer" }}
                            className={styles.q3}
						/>{" "}
                    <a href='/page3'>40% to 69% Completed</a>
                </li>
                <li >
                    <FontAwesomeIcon
							icon={faTicket}
							style={{ width: "18px", cursor: "pointer" }}
                            className={styles.q4}
						/>{" "}
                    <a href='/page4'>25% to 39% Completed</a></li>
                <li>
                    <FontAwesomeIcon
							icon={faTicket}
							style={{ width: "18px", cursor: "pointer" }}
                            className={styles.q5}
						/>{" "}
                    <a href='/page5'>Yet to be Started</a>
                    </li>
                <li className={styles.q6}>
                    <a href='http://smartcitydehradun.uk.gov.in/dscl/SectionInformation.html?editForm&rowId=35&page='
                 target="_blank">
                    For more deatils !Click Here!</a></li>
            </ul>

        </div>

    </div>
  )
}

export default  LeftNavbar