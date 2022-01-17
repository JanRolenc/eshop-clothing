import React from 'react';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';
import Header from '../../components/header/header.component.jsx';


// const HomePage = (props) => {
const HomePage = () => (
    // console.log(props);   timto mohu v F12/Console videt history, location, match

    <div className="homepage">
        <Directory />
    </div>

)

export default HomePage;