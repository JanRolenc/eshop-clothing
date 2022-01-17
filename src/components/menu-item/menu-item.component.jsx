import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {//size je tady nova css trida pro zvetseni 
    //nekterych obrazku/komponent (womens a mens); size doplnime jako atribut do objektu
    //a taky jako atribut k menu-item v directory v render; reactu nebude vadit, ze atribut/key
    //size maji jen nektere z objektu 
    return (
        <div
            className={`${size} menu-item`}
            //aby bylo kam push/presmerovat, doplnime do directory/sections linkUrl
            //push tady neni metoda na pole, ale metoda na presmerovani routy
            onClick={() => history.push(`${match.url}${linkUrl}`)}>

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

export default withRouter(MenuItem);//withRouter zpusobi, ze MenuItem component bude mit pristup
//k location, match a history (kterou doplnime do atributu vedle size) 