/**
 * Created By: Manoel Tavares
 * Date: 26 - 10 - 2018
 */
import React from 'react'
import ReactDom from 'react-dom'
import First from './components/first'

//ReactDom to make DOM changes
//Render a h1 in DOM whose  id is = root
//Syntax of React call JSX
//const elemento = <h1>Hello React</h1>
//ReactDom.render(elemento, document.getElementById('root'))

ReactDom.render(<First />, document.getElementById('root'))

