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
    // let fuck = null;
    // if(this.state.isTogled){
    //   fuck = <div>
    //     <input type="text" placeholder="password"/>
    //     <input type="text" placeholder="master password"/>
    //   </div>
    // }

    return(
      <div>
        <p>
          <input type="checkbox"/>
          <div>Make public</div>
        </p>
        <input type="text" name="password" placeholder="password" onChange={this.handleChange}/>
        <input type="text" name="masterPassword" placeholder="master password" onChange={this.handleChange}/>
      </div>
    )
  }
}
