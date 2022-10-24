import React from 'react';
import styles from './Includes.module.css';

const Ads = () => {
    return(
        <div className={styles.ads_body}>
            <div>
                ADS들어갈곳
            </div>
        </div>
    );
}

export default React.memo(Ads);