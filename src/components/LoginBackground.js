import React from 'react';
import styles from './LoginBackground.module.css';
import globalStyles from './bootstrap.min.module.css';
import cx from 'classnames';
import joole from './joole_meitu_5.png';

const LoginBackground = (props) => {
    return (
        <div className={styles.Fragment}>
            <div className={styles.logoContainer}>
                <div className={cx(globalStyles['container-fluid'])}>
                    <div className={cx(globalStyles.row)}>
                        <img id = "logo" src ={joole} alt=""></img>             
                    </div>
                </div>
            </div>

            <p className={styles.building}>Building Product Selection Platform</p>
        </div>
    )
}

export default LoginBackground;



// {/* <span><svg width="52" height="52" className={styles.circle}>
//     <circle cx="26" cy="26" r="25" fill="#1F4F7B" opacity="0.4" />
//     </svg></span>
//     <span><svg width="52" height="52" className={styles.circle}>
//     <circle cx="26" cy="26" r="25" fill="#1F4F7B" opacity="0.4" />
// </svg></span> */}