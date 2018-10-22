/* import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header className="row">
      <h1 className="navbar-button">Echtzeitansicht</h1>
      <h1 className="navbar-button">Analyseansicht</h1>
    </header>
  );
}

export default Navbar;
 */
import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import './Menu.css';

/* const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#31302f',
    font: 'black',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
    height: '50%'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
} */
class Navbar extends React.Component {
  
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu /* styles={ styles } */>
        <h1>RotorWind GmbH</h1>
        <em>Uns bewegt nicht nur der Wind</em>
        <a id="echtzeit" className="menu-item" href="/">Echtzeitansicht</a>
        <a id="analyse" className="menu-item" href="/analyse">Analyseansicht</a>
      </Menu>
    );
  }
}
export default Navbar;
