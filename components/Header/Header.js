import React from 'react';
import './Header.css';
import { ReactComponent as Wind } from '../../img/wind.svg';

function Header() {
    return (
        <div className="header">
            <h1 id='header-title'>RotorWind GmbH</h1>
            <h1><i id='wheel-header' class="material-icons">clear</i></h1>
            <Wind id="image" />
        </div>
    )
}

export default Header;
