import React from 'react';
import styles from './Includes.module.css';

const Header = () => {
    const profile_img = 'https://vaibhavvikas.ml/jekyll-theme-minimalistic/logo.jpg';

    return(
        <div className={styles.header}>
            <div className={styles.header_body}>
                <div className={styles.profile}>
                    <img src={profile_img} className={styles.profile_img}/>
                    <div>
                        <a className={styles.blog_name}>blog name</a>
                    </div>
                </div>    
                <div className={styles.header_list}>
                    <h3 className={styles.list_head}>분류</h3>
                    <ol>
                        <li>대분류</li>
                        <ol>
                            <li>중분류</li>
                            <ol>
                                <li>소분류</li>
                            </ol>
                        </ol>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Header);