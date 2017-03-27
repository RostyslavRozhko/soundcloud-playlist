import React, { Component } from 'react';
import { connect } from 'react-redux'
import { WEBSITE_URI, USER, MASTER } from '../constants'
import { checkPassword } from "../actions/database"
import App from './App'

import '../index.css'

class PasswordForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      password: '',
      logined: false
    }
  }

  componentWillMount = () => {
    this.setState({
      id: this.props.route.substring(2)
    })
  }

  handleChange = (event) => {
    this.setState({password: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let { id, password } = this.state
    checkPassword(this.state.id, this.state.password).
      then(response => {
          if(response.masterPassword){
            this.setState({
              type: MASTER,
              logined: true
            })
          } else {
            this.setState({
              type: USER,
              logined: true
            })
          }
      })
      .catch(err => console.log(err))
  }

  suka = () => (
    this.state.logined
      ? <App saved={true} type={this.state.type} id={this.state.id}/>
      : <form onSubmit={this.handleSubmit}>
          <span>Enter playlist password:</span>
          <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
          <input type="submit" value="Submit" />
        </form>
  )

  render(){
    return(
      <div>
        {
          this.state.logined
            ? <App saved={true} type={this.state.type} id={this.state.id}/>
            : <form onSubmit={this.handleSubmit}>
                <span>Enter playlist password:</span>
                <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                <input type="submit" value="Submit" />
              </form>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const route = state.routing.locationBeforeTransitions.pathname;
  return {
    route: route
  }
}

export default connect(mapStateToProps)(PasswordForm)
