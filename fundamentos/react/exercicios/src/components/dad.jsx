/**
 * Created By: Manoel Tavares
 * Date: 26 - 10 - 2018
 */
import React from 'react'
import Sun from './son'
import {childrenWithProps} from '../utils/utils'

export default props =>
    <div>
        <h1>{props.name} {props.lastname}</h1>
        <h2>Filhos</h2>
        <ul>
            {/*<Sun name='Manoel' lastname={props.lastname}/>
            <Sun {...props}/>
            <Sun {...props} name='Adria'/> */}
            {/*props.children*/}
            {
                childrenWithProps(props)
            }
        </ul>
    </div>