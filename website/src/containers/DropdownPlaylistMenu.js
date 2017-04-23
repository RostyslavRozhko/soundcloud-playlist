import React, { Component } from 'react'
import { connect } from 'react-redux'

import DropdownMenu from 'react-dd-menu'
import DropdownItem from '../components/DropdownItem'

import Popup from 'react-popup'
import PopupSave from '../components/PopupSave'

import { savePlaylist, updatePlaylist, savePublicPlaylist } from '../actions/database'
import { MASTER } from '../constants'

class DropdownPlaylistMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
      password: "",
      masterPassword: ""
    };
  }

  toggle = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  close = () => {
    this.setState({ isMenuOpen: false });
  };

  changeState = (ls) => {
    if(ls.password)
      this.setState({
        password: ls.password,
      })
    if(ls.masterPassword)
      this.setState({
        masterPassword: ls.masterPassword
      })
    if(ls.checkbox)
      this.setState({
        checkbox: ls.checkbox
      })
    if(ls.email)
      this.setState({
        email: ls.email
      })
  }

  savePlaylist = (state) => {
    let thiss = this
    Popup.create({
      title: "Save playlist",
      content: <PopupSave manager={(ls) => {this.changeState(ls)}}/>,
      // content: <input placeholder="sdsad" />,
      buttons: {
          left: [{
              text: 'Cancel',
              className: 'danger',
              action: function () {
                  Popup.alert('You pressed the Cancel btn');

                  /** Close this popup. Close will always close the current visible one, if one is visible */
                  Popup.close();
              }
          }],
          right: [{
              text: 'Save',
              className: 'success',
              action: function () {
                if(!thiss.state.checkbox){
                  savePlaylist(state, thiss.state.password, thiss.state.masterPassword, "s", thiss.state.email)
                } else {
                  savePlaylist(state, null, null, "p")
                }
                /** Close this popup. Close will always close the current visible one, if one is visible */
                Popup.close();
              }
          }]
      }
    })
  }

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
        {this.props.type === MASTER
          ? <li className="dropdownItem" onClick={() => updatePlaylist(this.props.state.id, this.props.state.tracks)}><a>Update playlist</a></li>
          : <li className="dropdownItem" onClick={() => this.savePlaylist(this.props.state)}><a>Save playlist</a></li>
        }
        <li className="dropdownItem"><a href={this.props.url}>Open on Soundcloud</a></li>
      </DropdownMenu>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.playlist,
    url: state.playlist.link,
    type: state.playlist.type
  }
}

export default connect(mapStateToProps)(DropdownPlaylistMenu)
