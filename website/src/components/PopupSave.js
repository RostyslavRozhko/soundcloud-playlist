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

  render(){

    return(
      <div>
        <span>Set password to playlist:</span>
        <input type="password" name="password" placeholder="Password" onChange={this.handleChange} className="password_input"/>
        <span>To be able to change playlist enter master password:</span>
        <input type="password" name="masterPassword" placeholder="Master password" onChange={this.handleChange} className="password_input"/>
        <div className="checkbox_p">
          <input type="checkbox"/>
          <span>Make public</span>
        </div>
      </div>
    )
  }
}
