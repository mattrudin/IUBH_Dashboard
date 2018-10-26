import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import AnalysisView from '../components/AnalysisView/AnalysisView';
import Head from '../components/head/head'

const Analyse = () => (
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

        .main-view {
            width: 100%;
            background: #eeeeee;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        body {
          margin: 0;
        }
      `}</style>
    </div>
) 

export default Analyse;
