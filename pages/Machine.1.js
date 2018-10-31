import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Head from '../components/head/head'
import MachineView from '../components/MachineView/MachineView'

const Machine = () => {
    return(
        <div className="App">
            <Head title={`Maschine`}/>
            <Navbar className="navbar"/>
            <div className="main-view">
                <Header />
                <MachineView 
                    picture1="okay_1"
                    picture2="okay_2"
                    picture3="okay_3"/>
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