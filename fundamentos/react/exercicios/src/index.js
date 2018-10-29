/**
 * Created By: Manoel Tavares
 * Date: 26 - 10 - 2018
 */
import React from 'react'
import ReactDom from 'react-dom'
import Salutations from './components/salutation'
import Dad from './components/dad'
import Son from './components/son'

ReactDom.render(
    <div>
        <Dad name='Manoel' lastname='Tavares'>
            <Son name='Junior'/>
            <Son name='Fabiano'/>
            <Son name='Oliveira'/>
            {/* how to pass the child components */}
        </Dad>
        
    </div> , document.getElementById('root')
)

//ReactDom.render(<GoodMorning name='Manoel'/>, document.getElementById('root'))

