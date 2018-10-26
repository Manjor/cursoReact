/**
 * Created By: Manoel Tavares
 * Date: 26 - 10 - 2018
 */
import React, {Fragment} from 'react'

//export default () => <h2>Good Morning</h2>
//Props define that function accept parameters
export default props => 
    //for two or more tags, is necessary envolve with tag super
    //or use React.Fragment
    <Fragment>
        <h2>Good Morning {props.name}!</h2>
        <h3>You Okay?</h3>
   </Fragment>

//or use array of elements with keys
//export default props => [
//    <h2 key='h1'>Good Morning {props.name}!</h2>,
//    <h3 key='ok'>You Okay?</h3>
//]
