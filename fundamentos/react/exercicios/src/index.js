/**
 * Created By: Manoel Tavares
 * Date: 26 - 10 - 2018
 */
import React from 'react'
import ReactDom from 'react-dom'
import Salutations from './components/salutation'

ReactDom.render(
    <div>
        <Salutations type='Good Morning' name='Manoel'/>
    </div> , document.getElementById('root')
)

//ReactDom.render(<GoodMorning name='Manoel'/>, document.getElementById('root'))

