import React from 'react';
//import './Header.css';
//import { ReactComponent as Wind } from '../../img/wind.svg';

function Header() {
    return (
        <div className="header">
            <h1 id='header-title'>RotorWind GmbH</h1>
            <h1><i id='wheel-header' class="material-icons">clear</i></h1>
            {/* <Wind id="image" /> */}
            <style jsx>{`.header {
    display: flex;
    background: #eeeeee;
    justify-content: space-around;
}

#header-title {
    color: black;
    font-family: 'Breezed';
    font-size: 60px;
    padding-left: 50px;
}

#image {
    height: 100px;
    width: 200px;
    padding-top: 30px;
}

#wheel-header {
    color: black;
    animation: roll 3s infinite;
    transform: rotate(30deg);
    font-size: 120px;
}

@keyframes roll {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}`}</style>
        </div>
    )
}

export default Header;
