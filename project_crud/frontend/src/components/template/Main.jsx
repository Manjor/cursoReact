import './Main.css'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default props =>
    <React.Fragment>
        <Header {...props}/>
        <main className='content'>
            Content Main
        </main>
    </React.Fragment>