import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import AnalysisView from '../components/AnalysisView/AnalysisView';
import Head from '../components/head/head'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head title="Analyse"/>
        <Navbar className="navbar"/>
        <div className="main-view">
          <Header />
          <AnalysisView />
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
    );
  }
}

export default App;
