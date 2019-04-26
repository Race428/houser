import React, { Component } from 'react'
// import axios from 'axios'


export default class House extends Component {
  
  constructor(props){
    super(props)
    this.state = { 
      houses: []


    }
  }

  
  
  
  
  
  render(){

   
    return(
      <div>
        <h1>House</h1>
        {this.props.houseProps.name}
        {this.props.houseProps.address}
        {this.props.houseProps.city}
        {this.props.houseProps.state}
        {this.props.houseProps.zip}
        <img src ={this.props.houseProps.img} alt ='' /> 
        {this.props.houseProps.mortgage}
        {this.props.houseProps.rent}
        <button>Delete</button>







      </div>
    )
    }

}