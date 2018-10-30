import MachineViewSensor from '../MachineViewSensor/MachineViewSensor'

const MachineView = () => (
    <div className="main-view">
        <h1>Maschine 1</h1>
        <div className="machine-view">
            <MachineViewSensor title="1" picture="okay_1"/>
            <MachineViewSensor title="2" picture="okay_2"/>
            <MachineViewSensor title="3" picture="critical"/>
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
        </div>
    </div>
)

export default MachineView