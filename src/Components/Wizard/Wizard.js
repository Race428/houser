import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Wizard extends Component {
  constructor() {
    super()

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

  // {this.state.name}
  // {this.state.address}
  // {this.state.city}
  // {this.state.zipcode}

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




      </div>
    )
  }

}