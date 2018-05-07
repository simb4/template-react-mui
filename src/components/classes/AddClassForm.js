import React, { Component } from 'react';
import { Row, Col, Icon, TimePicker, Button } from 'antd';
import _ from 'lodash';
import moment from 'moment';
moment.locale('ru');
import '../../utils/convert';

const format = "hh:mm";

class AddClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openStart: false,
      openEnd: false,
    }
  }
  onChange = (time, timeString) => {
    console.log(time, timeString);
  }
  onOpenChangeStart = (openStart) => this.setState({ openStart })
  onOpenChangeEnd = (openEnd) => this.setState({ openEnd })

  render() {
    return (
      <Col span={24}>
        <div className="add-class-form">
          <Row type="flex">
            <Col span={10}>
              <span className="form-label"> Время класса </span>
              <div className="time-picker">
                <TimePicker minuteStep={10}
                  open={this.state.openStart}
                  onOpenChange={this.onOpenChangeStart}
                  format={format}
                  placeholder="начало"
                  defaultOpenValue={moment('09:00', format)}
                  onChange={this.onChange}
                  addon={() => (
                    <Button size="small" type="primary" 
                      onClick={()=>this.onOpenChangeStart(false)}>
                      Ok
                    </Button>
                  )} />
                -
                <TimePicker minuteStep={10}
                  format={format}
                  open={this.state.openEnd}
                  onOpenChange={this.onOpenChangeEnd}
                  placeholder="конец"
                  // disabledHours={() => {}}
                  // disabledMinutes={(selectedHour)=>{}}
                  defaultOpenValue={moment('09:00', format)}
                  onChange={this.onChange}
                  addon={() => (
                    <Button size="small" type="primary" 
                      onClick={()=>this.onOpenChangeEnd(false)}>
                      Ok
                    </Button>
                  )} />
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    )
  }
}

export default AddClassForm;