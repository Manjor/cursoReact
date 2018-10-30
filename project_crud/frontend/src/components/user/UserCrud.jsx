import React, {Component} from 'react'
import Main from '../template/Main'


const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'Register of Users: Include, List, Alter and Delete'
}

export default class UserCrud extends Component{
    render(){
        return (
            <Main {...headerProps}>
                Register Users
            </Main>
        )
    }

}