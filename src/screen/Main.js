import React from 'react';
import Header from '../includes/Header';
import styles from './Main.module.css';
import Ads from '../includes/Ads';

const Main = () => {

    return(
        <div className={styles.body}>
            <Header/>
            <div>
                asd
            </div>
            <Ads/>
        </div>
    );
}

export default React.memo(Main);