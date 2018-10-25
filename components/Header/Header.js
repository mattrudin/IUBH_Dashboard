import React from 'react';

function Header() {
    return (
        <div className="header">
            <h1 id='header-title'>RotorWind GmbH</h1>
            <style jsx>{`
                .header {
                    display: flex;
                    background: #eeeeee;
                    justify-content: space-around;
                }

                #header-title {
                    color: black;
                    font-family: 'Audiowide';
                    font-size: 60px;
                    padding-left: 300px;
                }
            }`}</style>
        </div>
    )
}

export default Header;
