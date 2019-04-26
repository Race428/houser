import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';





export default class Wizard extends Component {
  constructor() {
    super()
    this.routeChange = this.routeChange.bind(this)
    
    this.state = {
      name: '',
      address: '',
      city: '',
      zipcode: '',
      state: ''
      
    }
  }

  handleChange(prop, val) {
    this.setState({ [prop]: val })
  }

routeChange(){
  let path = '/'
  this.props.history.push(path)
 
}

  createHouse(){
    axios.put(`/api/house`, {name: this.state.name, address: this.state.address, city: this.state.city, state: this.state.state, zip: this.state.zip, img: this.state.img, mortgage: this.state.mortgage, rent: this.state.rent }).then()
  }

  render() {
   
    return (
      <div>
        <h1>Wizard</h1>
        <Link to='/'><button>Cancel</button></Link>
        <input
          className='name_of_property'
          type='text' placeholder='Property Name'
          onChange={(e) => this.handleChange('name', e.target.value)} />
        <input
          className='address'
          type='text'
          placeholder='Address'
          onChange={e => this.handleChange('address', e.target.value)} />
        <input
          className='city'
          type='text'
          placeholder='City'
          onChange={e => this.handleChange('city', e.target.value)} />
        <input
          className='state'
          placeholder="State"
          onChange={e => this.handleChange('state', e.target.value)} />
        <input
          className='zipcode'
          type='text'
          placeholder='Zipcode'
          onChange={e => this.handleChange('zipcode', e.target.value)} />
        <button onClick= {this.routeChange}>Complete</button>



      </div>
    )
  }

}