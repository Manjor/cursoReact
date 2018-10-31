import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props =>
    <Switch>
        {/* Route of HomePage */}
        <Route exact path='/' component={Home}/>
        {/* Route of UserCrudPage */}
        <Route path='/users' component={UserCrud}/>
        {/*Any to Home */}
        <Redirect from='*' to='/'/>
    </Switch>