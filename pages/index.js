import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import RealtimeView from '../components/RealtimeView/RealtimeView';
import Head from '../components/head/head'

const App = () => (
  <div className="App">
    <Head title="Echtzeit"/>
    <Navbar className="navbar"/>
    <div className="main-view">
      <Header />
      <RealtimeView />
    </div>
    <style jsx global>{` 
      .App {
        display:flex;
        text-align: center;
        font-family: Roboto;
      }

      .navbar {
        min-width: 300px;
        position: fixed;
        height: 100%;
      }
      body {
        margin: 0;
      }
    `}</style>
  </div>
) 

export default App;
