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
    // async getHouse(){
    // axios.get(`/api/houses`).then(res => {
    //   const houses = res.data
    //    this.setState({houses})

    // })
    // }
   
   
    async componentDidMount(){
     
      const res = await axios.get(`/api/houses`)
      console.log(res.data)
         this.setState({
           houses: res.data
         })
        

      
  }

  delete(){
  const res = axios.post('/api/houses/:id')
  this.setState({
    houses:res.data
  })
}

  

   // use await with aysync 
  
  render(){
    let housesToDisplay = this.state.houses.map((element,index)=> { 
      return <House houseProps = {element}/>
    }) 
    return(
      <div>
        <h1>Dashboard</h1>
        
        <Link to='/wizard'><button>Add New Property</button></Link>
        {housesToDisplay}
        
        
      </div>
    )
    }

}