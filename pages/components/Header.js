import React from 'react'
import styles from "../../styles/Home.module.css"; 
import Image from "../../image/watermark.png";
function Header() {
  return (
    <div className={styles.headcontainer}>
    <div className={styles.headwrapper}>
        <div className={styles.title}>
            <h2>
                Hello, <span>DSCL User</span>
            </h2>
            <p>Welcome to the Project Dashboard.</p>
        </div>
        <div className={styles.profile}>
            <img src={Image} alt="profile" className={styles.image} />
        </div>
    </div>
</div>
);
}

export default Header