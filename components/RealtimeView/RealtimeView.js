import React, { Component } from 'react';
//import './RealtimeView.css';
import RealtimeViewMachine from '../RealtimeViewMachine/RealtimeViewMachine';
import { machinesArray } from './machines';

class RealtimeView extends Component {
  render() {
    const machines = machinesArray.map((machine, index) => (
      <RealtimeViewMachine title={`Maschine ${index + 1}`} type={machine[0]} status={machine[1]} />
    ));
    return <div className="machine-view">
        {machines}
        <style jsx>{`
          .machine-view {
            font-family: 'Roboto';
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            align-items: flex-start;
            background: #eeeeee;
            margin-left: 300px;
      }
      `}</style>
    </div>;
  }
}

export default RealtimeView;
