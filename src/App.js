import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component{
  constructor(){
    super()
    this.state ={
      "list" : []
    }
    this.getinput = this.getinput.bind(this)
  }
  getinput(){
    this.state.list.push(this.refs.tex.value)
    console.log(this.state.list)
    this.setState({
      list :this.state.list
    })
  }
  render() {
    return(
      <div>
          <input type='text' className='inpu' ref='tex'/>
          <button className='btn' onClick={this.getinput}>获取</button>
          <ul>
            {
              this.state.list.map(function(item,index){
                return(
                  <li key={index}>item</li>
                )
              })
            }
          </ul>
      </div>
    )
  }
}

export default App;
