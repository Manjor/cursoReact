/**
 * Created By: Manoel Tavares
 * Date: 26 - 10 - 2018
 */
import React from 'react'
import ReactDom from 'react-dom'
import First from './components/first'
import GoodMorning from './components/goodmorning'
import Multiples from './components/multiples'

ReactDom.render(
    <div>
        <Multiples.GoodAfternoon name='Manoel'/>
        <Multiples.GoodNight name='Manoel'/>
    </div> , document.getElementById('root')
)

//ReactDom.render(<GoodMorning name='Manoel'/>, document.getElementById('root'))

