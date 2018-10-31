import React from 'react';
import RealtimeViewMachine from '../RealtimeViewMachine/RealtimeViewMachine';
import { machinesArray } from './machines';
import Link from 'next/link'

const machines = machinesArray.map((machine, index) => (
    <div>
      <Link href={machine[1] === 'Wartung' ? `/` : `/Machine.${index}`} >
        <a className="machine">
          <RealtimeViewMachine title={`Maschine ${index + 1}`} type={machine[0]} status={machine[1]} />
        </a>
      </Link>
    </div>
));

const RealtimeView = () => (
  <div className="machine-view">
      {machines}
      <style jsx>{`
        .machine-view {
          font-family: 'Roboto';
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          background: #eeeeee;
          margin-left: 300px;
        }
    `}</style>
  </div>
) 

export default RealtimeView;
