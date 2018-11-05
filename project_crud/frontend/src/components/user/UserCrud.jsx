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
const baseUrl = 'http://localhost:3001/users'
//Define component initial State
const initialState = {
    user: {name: '', email: ''},
    list: []

}

export default class UserCrud extends Component{
    //Initialize component state with const initialstate
    state = {...initialState}

    componentWillMount(){
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data})
        })
    }
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
        console.log(url,method,user);
        axios[method](url,user).then(resp =>{
            const list = this.getUpdatedList(resp.data)
            this.setState({ list, user: initialState.user })
        }, error =>{
            console.log(error)
        })
        {/*if(user.id){
            axios.put(url,user).then(resp =>{
                const list = this.getUpdatedList(resp.data)
                this.setState({ list, user: initialState.user })
            }, error=>{
                console.log(error)
            })
        }else{
            axios.post(url,user).then(resp =>{
                const list = this.getUpdatedList(resp.data)
                this.setState({ list, user: initialState.user })
            }, error=>{
                console.log(error);
            })
        }*/}
    }

    getUpdatedList(user, add = true){
        //generate a new list of this.state.list
        const list = this.state.list.filter(u => u.id !== user.id)
        //Realoc elemet to first position array
        if(add) list.unshift(user)
        //list.unshift(user)
        return list
    }

    //Update the fields of form
    updateFild(event){
        //Clone object user of state
        const user = {...this.state.user}
        //search input call name
        user[event.target.name] = event.target.value
        this.setState({ user })

    }

    //Render form
    renderForm(){
        return(
            <div className='form'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <label>Name</label>
                            <input type="text" className='form-control'
                             name='name'
                             value={this.state.user.name}
                             onChange={e =>this.updateFild(e)}
                             placeholder='Enter your name...'
                            />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='form-group'>
                            <label>Email</label>
                            <input type="text" className='form-control'
                                name='email'
                                value={this.state.user.email}
                                onChange={e => this.updateFild(e)}
                                placeholder='Enter you email'
                            />
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-end'>
                        <button className='btn btn-primary'
                            onClick={e => this.save(e)}
                        >
                            Save
                        </button>
                        <button className='btn btn-secondary ml-2'
                            onClick={e => this.clear(e)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(user){
        this.setState({ user })
    }

    remove(user){
        axios.delete(`${baseUrl}/${user.id}`).then(resp =>{
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    renderTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows(){
        return this.state.list.map( user =>{
            return(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning m-1"
                            onClick={() => this.load(user)}>
                            <i className='fa fa-pencil'></i>
                        </button>
                        <button className="btn btn-danger m-1"
                            onClick={() => this.remove(user)}>
                            <i className='fa fa-trash'></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }
    render(){
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }

}