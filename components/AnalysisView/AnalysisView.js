import React from 'react';

const AnalysisView = () => (
  <div className="analysis-view">
    <div className="view time-cost">
      <h1>Wartung</h1>
      <p>Zeit / Kosten</p>
      <img src="/static/zeit_kosten.png" width="600px"/>
    </div>
    <div className="view time-temperature">
      <h1>Wartung</h1>
      <p>Zeit / Temperatur</p>
      <img src="/static/zeit_temperatur.png" width="600px"/>
    </div>
    <style jsx>{`
        .analysis-view {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Roboto';
          background: #eeeeee;
          margin-left: 300px;
        }

        .view {
          width: 800px;
          height: 500px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: 0.3s;
          margin: 10px;
          color: white;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }

        .time-cost {
          background: #4472c4;
        }

        .time-temperature {
          background: #4472c4;
        }
    `}</style>
  </div>
) 

export default AnalysisView;
