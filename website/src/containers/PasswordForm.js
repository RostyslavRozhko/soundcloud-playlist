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
      logined: false,
      error: false
    }
  }

  componentWillMount = () => {
    this.setState({
      id: this.props.route.substring(2)
    })
  }

  handleChange = (event) => {
    this.setState({
      password: event.target.value,
      error: false
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let { id, password } = this.state
    checkPassword(this.state.id, this.state.password).
      then(response => {
          if(!response.data){
            this.throwError()
          } else if(response.data.masterPassword){
            this.setState({
              type: MASTER,
              logined: true
            })
          } else if(response.data.password){
            this.setState({
              type: USER,
              logined: true
            })
          }
      })
      .catch(err => console.log(err))
  }

  throwError = () => {
    console.log("fuck");
    this.setState({
      error: true
    })
  }

  render(){
    if(this.state.error){
      var error = <div className="alert">Wrong password</div>
    }

    return(
      <div className="height">
        {
          this.state.logined
            ? <App saved={true} type={this.state.type} id={this.state.id}/>
            : <form onSubmit={this.handleSubmit} className="passwordForm">
                <span>Enter playlist password:</span>
                <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                {error}
                <input type="submit" value="Submit" className="mm-popup__btn mm-popup__btn--success" />
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
