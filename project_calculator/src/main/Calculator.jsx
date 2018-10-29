//Components of Calculator in JSX
//imports
import React,{Component} from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

//Criate class Calcultator in default export
export default class Calculator extends Component{


    constructor(props){
        super(props)
        //Make the bind of functions of call this
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
        
    }

    //Function of clear display of calculator
    clearMemory(){
        console.log('Memory Clear')
    }

    //Function that setter operation 
    setOperation(operation){
        console.log("Operação: " , operation)
    }
    //Function to create selected digit in display
    addDigit(n){
        console.log("Digit: " , n)
    }

    //Function render
    render(){

        return (
            //In JSX use className nothing class
            <div className='calculator'>
                <Display value={100}/>
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