import React from 'react';
import Header from '../includes/Header';
import styles from './Main.module.css';

const Main = () => {

    return(
        <div className={styles.body}>
            <Header/>
            <div>
                asd
            </div>
            <div>
                asd
            </div>
        </div>
    );
}

export default React.memo(Main);