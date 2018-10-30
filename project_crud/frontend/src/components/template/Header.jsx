import './Header.css'
import React from 'react'


export default props =>
    <header className='header d-none d-sm-flex flex-column'>
        <h1 className="mt-3">
        {/*Use classes of font-awesome fa fa-*/}
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className='lead text-muted'>{props.subtitle}</p>
    </header>