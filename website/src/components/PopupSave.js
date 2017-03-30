import React, { Component } from 'react'

export default class PopupSave extends Component{
  constructor(props){
    super(props)
    this.state = {
      isTogled: false
    }
  }

  handleChange = (event) => {
    this.props.manager({
      [event.target.name]: event.target.value
    })
  }

  checkboxChange = (event) => {
    this.props.manager({
      checkbox: event.target.checked
    })
  }

  render(){

    return(
      <div>
        <span>Set password to playlist:</span>
        <input type="password" name="password" placeholder="Password" onChange={this.handleChange} className="password_input" required />
        <span>To be able to change playlist enter master password:</span>
        <input type="password" name="masterPassword" placeholder="Master password" onChange={this.handleChange} className="password_input" required/>
        <span>Set your email to dont forget passwords(optional):</span>
        <input type="email" name="email" placeholder="Email" onChange={this.handleChange} className="password_input" />
        {/* Change style of input fields on checkbox chang */}
        <div className="checkbox_p">
          <input type="checkbox" name="checkbox" onChange={this.checkboxChange}/>
          <span>Make public</span>
        </div>
      </div>
    )
  }
}
