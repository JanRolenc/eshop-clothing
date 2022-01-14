import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => {//size je tady nova css trida pro zvetseni 
    //nekterych obrazku/komponent (womens a mens); size doplnime jako atribut do objektu
    //a taky jako atribut k menu-item v directory v render; reactu nebude vadit, ze atribut/key
    //size maji jen nektere z objektu 
    return (
        <div className={`${size} menu-item`}>
            <div style={{ backgroundImage: `url(${imageUrl})` }}
                className='background-image'
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>

    );
}

export default MenuItem;