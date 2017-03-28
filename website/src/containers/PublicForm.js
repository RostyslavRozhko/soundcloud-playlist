import React, { Component } from 'react';
import { connect } from 'react-redux'
import { WEBSITE_URI, USER, MASTER } from '../constants'
import { checkPassword } from "../actions/database"
import App from './App'

import '../index.css'

class PasswordForm extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount = () => {
    this.setState({
      id: this.props.route.substring(2)
    })
  }

  render(){
    return(
      <App saved={true} type={USER} id={this.state.id}/>
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
