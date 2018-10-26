import React from 'react';
//import './RealtimeViewMachine.css';

function RealtimeViewMachine(props) {
  const status =
    props.status === 'OK'
      ? 'machine-ok'
      : props.status === 'NA'
        ? 'machine-na'
        : 'machine-critical';
  return (
      <a href='/' className={`machine ${status}`}>
        <h1>{props.title}</h1>
        <p>Typ: {props.type}</p>
        <p>Status: {props.status}</p>
        <style jsx>
        {`
        .machine {
          width: 200px;
          height: 200px;
          display: flex;
          flex-direction: column;
          transition: 0.3s;
          margin: 10px;
          color: black;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
      
      /* unvisited link */
      .machine:link {
          text-decoration: none;
      }
      
      /* visited link */
      .machine:visited {
          text-decoration: none;
      }
      
      /* mouse over link */
      .machine:hover {
          transform: scale(1.05);
      }
      
      .title {
          font-size: 30px;
      }
      
      .machine-ok {
          background: rgb(50, 179, 63);
          background: linear-gradient(90deg, rgba(50, 179, 63, 1) 0%, rgba(46, 153, 52, 1) 48%, rgba(40, 135, 44, 1) 100%);
      }
      
      .machine-na {
          background: rgb(213, 213, 213);
          background: linear-gradient(90deg, rgba(213, 213, 213, 1) 0%, rgba(194, 192, 192, 1) 48%, rgba(161, 161, 161, 1) 100%);
      
      }
      
      .machine-critical {
          color: white;
          background: rgb(217, 40, 40);
          background: linear-gradient(90deg, rgba(217, 40, 40, 1) 0%, rgba(203, 54, 54, 1) 48%, rgba(156, 36, 36, 1) 100%);
      }
        `}
        </style>
      </a>
  );
}

export default RealtimeViewMachine;
