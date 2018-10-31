import React, {Component} from 'react'
//Lib Http axios
import axios from 'axios'
import Main from '../template/Main'

//Define header props of initial state
const headerProps = {
    icon: 'users',
    title: 'Users',
    subtitle: 'Register of Users: Include, List, Alter and Delete'
}
//Define url base of the  data
const baseUrl = 'http://locahost:3001/users'
//Define component initial State
const initialState = {
    user: {name: '', email: ''},
    list: []

}

export default class UserCrud extends Component{
    //Initialize component state with const initialstate
    state = {...initialState}

    //Clear a form
    clear(){
        this.setState({user : initialState.user})
    }

    //Function save a new user and update exist user
    //Include - use PUT
    //Update - use POST
    save(){
        const user = this.state.user
        //if user id == true call put else post
        const method = user.id ? 'put' : 'post'
        //if exist id , return http://localhost/users/id
        //else return http://localhost/users
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        //
        axios[method](url,user).then(resp =>{
            //resp.data is user of the return of axios[method]
            // include ou alter user
            const list = this.getUpdatedList(resp.data)
            this.setState({user : initialState.user, list})
        })
    }

    getUpdatedList(user){
        //generate a new list of this.state.list
        const list = this.state.list.filter(u => u.id !== user.id)
        //Realoc elemet to first position array
        list.unshift(user)
        return list
    }

    render(){
        return (
            <Main {...headerProps}>
                Register Users
            </Main>
        )
    }

}