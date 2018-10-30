import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Head from '../components/head/head'
import MachineView from '../components/MachineView/MachineView'

const Machine = (props) => {
    return(
        <div className="App">
            <Head title={`Maschine ${props.title}`}/>
            <Navbar className="navbar"/>
            <div className="main-view">
                <Header />
                <MachineView />
            </div>
            <style jsx global>{` 
        .App {
          display:flex;
          text-align: center;
            background: #eeeeee;
            font-family: Roboto;
        }

        .navbar {
          min-width: 300px;
          position: fixed;
          height: 100%;
        }

        .main-view {
            width: 100%;
            background: #eeeeee;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100vh;
        }
        body {
          margin: 0;
        }
      `}</style>
        </div>
        
    )
}

export default Machine