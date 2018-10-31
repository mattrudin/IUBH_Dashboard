import MachineViewSensor from '../MachineViewSensor/MachineViewSensor'

const MachineView = (props) => (
    <div className="main-view">
        <h1 className="machine-title">Maschine {props.machineNo}</h1>
        <div className="machine-view">
            <MachineViewSensor title="1" picture={props.picture1}/>
            <MachineViewSensor title="2" picture={props.picture2}/>
            <MachineViewSensor title="3" picture={props.picture3}/>
            <style jsx global>{`
            .machine-title {
                margin-left: 300px;
            }
            .machine-view {
            font-family: 'Roboto';
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            align-items: flex-start;
            background: #eeeeee;
            margin-left: 300px;
            }
            .button-row {
                display: flex;
                margin-left: 300px;
            }
            .button {
                margin-left: 40px;
                transition: 0.3s;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                padding-right: 10px;
                padding-left: 10px;
                margin-top: 20px;
                color: white;
            }
            .button:hover {
                transform: scale(1.05);
            }
            .button:link {
                text-decoration: none;
            }
            
            .button:visited {
                text-decoration: none;
            }
            .neustart {
                background: #4472c4;
            }
            .not-aus {
                color: white;
                border-radius: 50%;
                background: red;
            }
        `}</style>
        </div>
        <div className="button-row">
            <a href='/' className="button neustart">
                <h2>Neustart der Maschine</h2>
            </a>
            <a href='/' className="button not-aus">
                <h2>NOT AUS</h2>
            </a>
        </div>
    </div>
)

export default MachineView