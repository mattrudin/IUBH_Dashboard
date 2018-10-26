import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Head from '../components/head/head'

const Machine = (props) => {
    return(
        <div>
            <Head title={`Maschine ${props.title}`}/>
            <Navbar className="navbar"/>
            <div className="main-view">
                <Header />
            </div>
        </div>
    )
}

export default Machine