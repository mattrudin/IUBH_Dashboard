import React from 'react';

const AnalysisView = () => (
  <div className="analysis-view">
    <div className="view time-cost">
      <h1>Wartung</h1>
      <p>Zeit / Kosten</p>
    </div>
    <div className="view time-temperature">
      <h1>Wartung</h1>
      <p>Zeit / Temperatur</p>
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
          transition: 0.3s;
          margin: 10px;
          color: white;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }

        .time-cost {
          background: linear-gradient(90deg, rgba(58,129,219,1) 0%, rgba(54,113,188,1) 48%, rgba(43,92,155,1) 100%);
        }

        .time-temperature {
          background: linear-gradient(90deg, rgba(64,184,226,1) 0%, rgba(57,163,200,1) 48%, rgba(43,126,155,1) 100%);
        }
    `}</style>
  </div>
) 

export default AnalysisView;
