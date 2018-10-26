/**
 * Created By: Manoel Tavares
 * Date: 26 - 10 - 2018
 */
import React from 'react'
import ReactDom from 'react-dom'

//ReactDom serve para fazer alterações na DOM
//Renderiza um h1 na DOM cujo o id é root
//Sintaxe do React chamada JSX
const elemento = <h1>Hello React</h1>
ReactDom.render(elemento, document.getElementById('root'))