import React, { Component } from 'react';
import { connect } from 'react-redux'

import '../index.css';

export default class PlaylistInfo extends Component {
  render(){
    return(
      <li className="dropdownItem"><a href={this.props.url}>{this.props.name}</a></li>
    )
  }
}
