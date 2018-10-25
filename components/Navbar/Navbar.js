import React from 'react';
import { slide as Menu } from 'react-burger-menu'
//import './Menu.css';

class Navbar extends React.Component {
  
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu>
        <h1 ><i id='wheel' class="material-icons">clear</i></h1>
        <h1 id='title-wind'>RotorWind GmbH</h1>
        <em>"Uns bewegt nicht nur der Wind"</em>
        <a id="echtzeit" className="menu-item" href="/"><i class="material-icons">update</i> Echtzeitansicht</a>
        <a id="analyse" className="menu-item" href="/analyse"><i class="material-icons">timeline</i> Analyseansicht</a>
      </Menu>
    );
  }
}
export default Navbar;
