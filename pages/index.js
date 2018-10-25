import React, { Component } from 'react';
//import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import RealtimeView from '../components/RealtimeView/RealtimeView';
import AnalysisView from '../components/AnalysisView/AnalysisView';
import Head from '../components/head/head'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Navbar />
        <div className="main-view">
          <Header />
          <RealtimeView />
        </div>
        <style jsx>{`.App {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`}</style>
      </div>
    );
  }
}

export default App;
