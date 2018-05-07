import React, { Component } from 'react';
import { Row, Col, TimePicker, Button, Select, Input, InputNumber } from 'antd';
import _ from 'lodash';
import moment from 'moment';
moment.locale('ru');
import '../../utils/convert';

const format = "HH:mm";

class AddClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openStart: false,
      openEnd: false,
      data: {
        timestamp_start: null,
        timestamp_end: null,
        sport_type: null,
        name: null,
        max_users: 12,
      },
    }
  }
  componentDidMount() {
    window.addEventListener('keypress', this.handleCloseTime);
  }
  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleCloseTime);
  }

  onOpenChangeStart = (openStart) => this.setState({ openStart })
  onOpenChangeEnd = (openEnd) => this.setState({ openEnd })

  handleCloseTime = (e) => {
    var key = e.which || e.keyCode;
    if (key === 13 && this.state.openStart) { // 13 is enter
      this.onChangeStart(this.startRef.state.value);
    }
    if (key === 13 && this.state.openEnd) { // 13 is enter
      this.onChangeEnd(this.endRef.state.value);
    }
  }
  onChangeStart = (time) => {
    let timestamp_start = time.toISOString();
    this.setState({
      data: { ...this.state.data, timestamp_start },
      openStart: false,
    });
  }
  onChangeEnd = (time) => {
    let timestamp_end = time.toISOString();
    this.setState({
      data: { ...this.state.data, timestamp_end },
      openEnd: false,
    });
  }
  onChangeSport = (sport_type) => {
    this.setState({
      data: { ...this.state.data, sport_type }
    });
  }
  onChangeName = (e) => {
    let name = e.target.value;
    this.setState({
      data: { ...this.state.data, name }
    });
  }
  onChangeCount = (max_users) => {
    this.setState({
      data: { ...this.state.data, max_users }
    });
  }
  onSubmit = () => {
    this.props.onSubmit({
      ...this.state.data,
      description: this.state.data.name,
      coach: "1",
    });
  }
  render() {
    let isDisabled = !this.state.data.name
        || !this.state.data.timestamp_start
        || !this.state.data.timestamp_end
        || !this.state.data.sport_type
        || !this.state.data.max_users;
    return (
      <Col span={24}>
        <div className="add-class-form">
          <Row type="flex">
            {/* TimePickers */}
            <div className="add-class-form-input add-class-timepickers">
              <span className="form-label"> Время класса </span>
              <div className="time-picker">
                <TimePicker minuteStep={10}
                  ref={(ref) => this.startRef = ref}
                  format={format}
                  open={this.state.openStart}
                  onOpenChange={this.onOpenChangeStart}
                  onChange={this.onChangeStart}
                  placeholder="начало"
                  defaultOpenValue={moment('09:00', format)}
                  addon={() => (
                    <Button size="small" type="primary" 
                      onClick={()=>this.onOpenChangeStart(false)}>
                      Ok
                    </Button>
                  )} />
                -
                <TimePicker minuteStep={10}
                  ref={(ref) => this.endRef = ref}
                  format={format}
                  open={this.state.openEnd}
                  onOpenChange={this.onOpenChangeEnd}
                  onChange={this.onChangeEnd}
                  placeholder="конец"
                  // disabledHours={() => {}}
                  // disabledMinutes={(selectedHour)=>{}}
                  defaultOpenValue={moment('10:00', format)}
                  addon={() => (
                    <Button size="small" type="primary" 
                      onClick={()=>this.onOpenChangeEnd(false)}>
                      Ok
                    </Button>
                  )} />
              </div>
            </div>
            {/* SportsSelect */}
            <div className="add-class-form-input add-class-sports">
              <span className="form-label"> Вид спорта </span>
              <Select
                defaultValue={null}
                style={{width: '100%'}}
                onChange={this.onChangeSport.bind(this)}>
                  <Option key={-1} value={null}>Выберите вид</Option>
                  {this.props.sports.map(sport =>
                    <Option key={sport.id} value={sport.id}>{sport.name}</Option>
                  )}
              </Select>
            </div>
            {/* NameType */}
            <div className="add-class-form-input add-class-name">
              <span className="form-label"> Название </span>
              <Input
                placeholder="Введите название класса"
                onChange={this.onChangeName}/>
            </div>
            {/* Count */}
            <div className="add-class-form-input add-class-count">
              <span className="form-label"> Мест для 1Fit </span>
              <InputNumber 
                min={1} max={30}
                defaultValue={12}
                onChange={this.onChangeCount}/>
            </div>
            {/* Submit */}
            <div className="add-class-form-input add-class-submit">
              <Button type="primary"
                disabled={isDisabled}
                icon="plus" size="large"
                onClick={this.onSubmit} />
            </div>
          </Row>
        </div>
      </Col>
    )
  }
}

export default AddClassForm;