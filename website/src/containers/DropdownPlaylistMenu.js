import React, { Component } from 'react';
import { connect } from 'react-redux'

import DropdownMenu from 'react-dd-menu';
import DropdownItem from '../components/DropdownItem'

class DropdownPlaylistMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false
    };
  }

  toggle = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  close = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    let menuOptions = {
      isOpen: this.state.isMenuOpen,
      close: this.close.bind(this),
      toggle: <div className="btn moreBtn playlistBtn" onClick={this.toggle.bind(this)}></div>,
      className: "menu",
      align: 'left',
    };
    let obj = this.props.items
    return (
      <DropdownMenu {...menuOptions}>
        <li className="dropdownItem"><a onClick={() => this.handleClick()}>Save</a></li>
        <li className="dropdownItem"><a href={this.props.url}>Open on Soundcloud</a></li>
      </DropdownMenu>
    );
  }
}

function mapStateToProps(state) {
  return {
    url: state.playlist.link
  }
}

export default connect(mapStateToProps)(DropdownPlaylistMenu)
