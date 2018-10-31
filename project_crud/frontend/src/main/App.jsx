import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
//Use HashRouter with import HashRouter and Override BrowserRouter
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'

export default props => 

    <BrowserRouter>
        <div className='app'>
            <Logo/>
            <Nav />
            <Routes/>
            <Footer />
        </div>
    </BrowserRouter>
    