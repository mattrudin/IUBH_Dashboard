import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import RealtimeView from './components/RealtimeView/RealtimeView';
import AnalysisView from './components/AnalysisView/AnalysisView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main-view">
          <Header />
          <RealtimeView />
        </div>
      </div>
    );
  }
}

export default App;