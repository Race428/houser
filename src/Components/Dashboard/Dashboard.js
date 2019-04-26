import React, { Component } from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { send } from 'q';


export default class Dashboard extends Component {
  constructor(){
    super()
    this.state = { 
      houses: []


    }
  }

//ayscn code 
  getHouse(){
    axios.get(`/api/houses`).then(res => {
      const houses = res.data
      this.setState({houses})

    })
    }
  componentDidMount(){
    const { getHouse } = this.props
    this.getHouse()
  }


   

   // use await with aysync 
  
  render(){
    let housesToDisplay = this.state.houses.map((element,index)=> { 
      return <h2 key={index}>{element}</h2>
    }) 
    return(
      <div>
        <h1>Dashboard</h1>
        <House /> 
        <Link to='/wizard'><button>Add New Property</button></Link>
        {housesToDisplay}
        
      </div>
    )
    }

}