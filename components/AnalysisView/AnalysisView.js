import React, { Component } from 'react';
import './AnalysisView.css';

class AnalysisView extends Component {
  render() {
    return (
      <div className="analysis-view">
        <div className="time-cost">
          <h1>Wartung</h1>
          <p>Zeit / Kosten</p>
        </div>
        <div className="time-cost">
          <h1>Wartung</h1>
          <p>Zeit / Temperatur</p>
        </div>
      </div>
    );
  }
}

export default AnalysisView;
