import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class TabIcon extends Component {
  render() {
    let tabClass = "header-tab" + (this.props.isActive ? ' active' : '');
    return (
      <Link to={this.props.tab.path}>
        <div className={tabClass}>
          {this.props.tab.icon}
          <span className="header-tab-label">{this.props.tab.label}</span>
        </div>
      </Link>
      )
    }
}