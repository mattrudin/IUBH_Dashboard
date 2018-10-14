import React from 'react';
import './RealtimeViewMachine.css';

function RealtimeViewMachine(props) {
  const status =
    props.status === 'OK'
      ? 'machine-ok'
      : props.status === 'NA'
        ? 'machine-na'
        : 'machine-critical';
  return (
    <div className={`machine ${status}`}>
      <h1>{props.title}</h1>
      <p>Typ: {props.type}</p>
      <p>Status: {props.status}</p>
    </div>
  );
}

export default RealtimeViewMachine;
