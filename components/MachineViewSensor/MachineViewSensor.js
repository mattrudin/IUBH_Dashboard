const MachineViewSensor = (props) => (
    <div className={props.picture === 'critical' ? 'critical-tile' : 'tile'}>
        <h1>{`Sensor ${props.title}`}</h1>
        <img src={`/static/${props.picture}.png`} width="175px"/>
        <style jsx>{`
        .tile {
            width: 200px;
            height: 400px;
            background: #70ad47;
            color: white;
            margin: 10px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }

        .critical-tile {
            width: 200px;
            height: 400px;
            background: #ed7d31;
            color: white;
            margin: 10px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
    `}</style>
    </div>
)

export default MachineViewSensor