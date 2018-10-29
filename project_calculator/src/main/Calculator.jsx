//Components of Calculator in JSX
//imports
import React,{Component} from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'


const initialState = {
    displayValue: '0',
    clearDisplay:false,
    operation : null,
    values:[0,0],
    current: 0
}

//Criate class Calcultator in default export
export default class Calculator extends Component{

    state = {...initialState}

    constructor(props){
        super(props)
        //Make the bind of functions of call this
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
        
    }

    //Function of clear display of calculator
    clearMemory(){
        this.setState({...initialState})
    }

    //Function that setter operation 
    setOperation(operation){
        console.log("Operação: " , operation)
    }
    //Function to create selected digit in display
    addDigit(n){
        if(n === '.' && this.state.displayValue.includes('.')){
            return
        }

        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({displayValue, clearDisplay: false})

        if(n !== '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = {...this.state.values}
            values[i] = newValue
            this.setState({values})
            console.log(values)
        }

    }

    //Function render
    render(){

        return (
            //In JSX use className nothing class
            <div className='calculator'>
                <Display value={this.state.displayValue}/>
                <Button label='AC' click={this.clearMemory} triple />
                <Button label='/' click={this.setOperation} operation />
                <Button label='7' click={this.addDigit}/>
                <Button label='8' click={this.addDigit}/>
                <Button label='9' click={this.addDigit} />
                <Button label='*' click={this.setOperation} operation/>
                <Button label='4' click={this.addDigit}/>
                <Button label='5' click={this.addDigit}/>
                <Button label='6' click={this.addDigit}/>
                <Button label='-' click={this.setOperation} operation/>
                <Button label='1' click={this.addDigit}/>
                <Button label='2' click={this.addDigit}/>
                <Button label='3' click={this.addDigit}/>
                <Button label='+' click={this.setOperation} operation/>
                <Button label='0' click={this.addDigit} double/>
                <Button label='.' click={this.addDigit}/>
                <Button label='=' click={this.setOperation} operation/>
            
            </div>
        )
    }



}