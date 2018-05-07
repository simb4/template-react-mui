import React, { Component } from 'react';
import { Col, Icon } from 'antd';
import _ from 'lodash';
import moment from 'moment';
moment.locale('ru');
import '../../utils/convert';

const today = new Date().startOfDay();

const pop_front = ([x, ...rest]) => rest;
const pop_back  = (a) => a.slice(0,-1);
const back = (a) => a[a.length-1];
const front = (a) => a[0];

class Arrow extends Component {
  render() {
    let className = 'date-item-arrow ' + this.props.className;
    return (
      <div className={className} onClick={this.props.onClick}>
        <Icon type={this.props.type} />
      </div>
    )
  }
}

class DateSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMoving: false,
      current: 0,
      items: [0,1,2,3,4,5,6],
      left: -1,
      right: 7,
    }
  }
  onSelect(newCurrent) {
    this.setState({ current: newCurrent }, () => {
      if (!!this.props.onSelect) {
        this.props.onSelect(today[this.props.deltaFunc](newCurrent));  
      }
    });
  }
  itemRender(incr , cls='') {
    let date = today[this.props.deltaFunc](incr);
    let classNames = [];
    classNames.push('date-item');
    classNames.push(cls);
    classNames.push(date.getDay()%6===0 && this.props.deltaFunc === 'addDays'
      ? 'date-weekend'
      : 'date-weekday'
    );
    if (incr === this.state.current)
      classNames.push('date-item-active');

    return (
      <div key={incr} className={classNames.join(' ')} onClick={this.onSelect.bind(this, incr)}>
        {moment(date).format(this.props.format)}
      </div>
    )
  }
  moveLeft() {
    let newItems = [this.state.left, ...pop_back(this.state.items)];
    this.setState({
      left: this.state.left - 1,
      right: back(this.state.items),
      items: newItems,
    });
  }
  moveRight() {
    let newItems = [...pop_front(this.state.items), this.state.right];
    this.setState({
      left: front(this.state.items),
      right: this.state.right + 1,
      items: newItems,
    });
  }
  render() {
    return (
      <Col span={24}>
        <div className="date-select">
          <Arrow type="left"
            className=""
            onClick={this.moveLeft.bind(this)}
          />
          <div className="date-select-items">
            {this.itemRender(this.state.left, 'date-item-left')}
            {
              this.state.items.map(i => this.itemRender(i))
            }
            {this.itemRender(this.state.right, 'date-item-right')}
          </div>
          <Arrow type="right"
            className=""
            onClick={this.moveRight.bind(this)}
          />
        </div>
      </Col>
    )
  }
}

export default DateSelect;