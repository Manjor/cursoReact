/**
 * Created By: Manoel Tavares
 * Date: 26 - 10 - 2018
 */

 import React, {Component} from 'react'

 export default class Saudacao extends Component{
    

    
    state = {
        type: this.props.type,
        name: this.props.name
    }

    setType(e){

        //let i = 1
        //setInterval(()=> {
        //alter state of atributte
        //1.*
        //    this.setState({ type: ++ i})

        // },1000)
        console.log(e.target.value)
        this.setState({ type: e.target.value})
        
    }
    setName(e){
        this.setState({name: e.target.value})
    }
    constructor(props){
        super(props)
        this.setType = this.setType.bind(this)
    }

    //function that render the component
    render(){
        //capture the proprerties of the parameters
        const {type, name} = this.state
        //Expression
        return(
            <div>
                <h1>{type} {name}</h1>
                <hr />
                <input type='text' placeholder='Type...' value={type} onChange={this.setType} />
                <input type='text' placeholder='Name...' value={name} onChange={e => this.setName(e)}/>
            </div>
        )   
    }

 }
//onChange={ function } active editionmode in input