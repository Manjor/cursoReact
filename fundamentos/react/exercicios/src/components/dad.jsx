/**
 * Created By: Manoel Tavares
 * Date: 26 - 10 - 2018
 */
import React from 'react'
import Sun from './son'

export default props =>
    <div>
        <h1>{props.name} {props.lastname}</h1>
        <ul>
            <Sun name='Manoel' lastname={props.lastname}/>
            <Sun {...props}/>
            <Sun {...props} name='Adria'/>
        </ul>
    </div>