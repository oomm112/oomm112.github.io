import React from 'react';
import './Includes.css';

const Header = () => {
    const profile_img = 'https://vaibhavvikas.ml/jekyll-theme-minimalistic/logo.jpg';

    return(
        <div className='header'>
            <img src={profile_img} className='profile_img'/>
        </div>
    );
}

export default React.memo(Header);