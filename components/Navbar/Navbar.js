import React from 'react';
import { slide as Menu } from 'react-burger-menu'

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
        <style jsx>{`/* Position and sizing of burger button */
element.style {
    height: 60%;
}

.bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
    background: #373a47;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
    height: 24px;
    width: 24px;
}

/* Color/shape of close button cross */
.bm-cross {
    background: #bdc3c7;
}

/* General sidebar styles */
.bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
    fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
    height: 50% !important;
}

/* Individual item */
.bm-item {
    display: inline-block;
}

/* Styling of overlay */
.bm-overlay {
    background: rgba(0, 0, 0, 0.3);
}

h1 {
    color: white;
}

em {
    color: white;
    margin-bottom: 50px;
}

#title-wind {
    font-family: "Breezed";
}

.menu-item {
    padding: 10px;
    margin: 2px;
    opacity: 0, 5;
    transition: 0.3s;
}

/* unvisited link */
.menu-item:link {
    color: #b8b7ad;
    text-decoration: none;
}

/* visited link */
.menu-item:visited {
    color: #b8b7ad;
    text-decoration: none;
}

/* mouse over link */
.menu-item:hover {
    color: white;
    background: #00acc1;
    border-radius: 5px;
    opacity: 1;
    transform: scale(1.1);
}

#wheel {
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
      </Menu>
    );
  }
}
export default Navbar;
