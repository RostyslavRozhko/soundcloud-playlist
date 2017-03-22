import React, { Component } from 'react';
import DropdownMenu from 'react-dd-menu';

import DropdownItem from '../components/DropdownItem'

export class DropdownItemMenu extends Component {
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

  click = () => {
    console.log('You clicked an item');
  };

  render() {
    let menuOptions = {
      isOpen: this.state.isMenuOpen,
      close: this.close.bind(this),
      toggle: <div className="btn moreBtn" onClick={this.toggle.bind(this)}></div>,
      className: "menu",
      align: 'left',
    };
    let obj = this.props.items
    return (
      <DropdownMenu {...menuOptions}>
        <DropdownItem name={obj.delete.name} index={obj.delete.index} isAction={true}/>
        <DropdownItem url={obj.album.link} name={obj.album.name} isAction={false}/>
        <DropdownItem url={obj.author.link} name={obj.author.name} isAction={false}/>
      </DropdownMenu>
    );
  }
}
