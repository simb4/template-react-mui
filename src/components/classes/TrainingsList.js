import React, { Component } from 'react';
import { Table, Col } from 'antd';
import _ from 'lodash';
import moment from 'moment';

const columns = [{
  title: 'Время класса',
  dataIndex: 'time',
  // colSpan: 6,
  key: 'time',
  render: (time) => (
    <span>{moment(time.start).format('HH:mm')} - {moment(time.end).format('HH:mm')}</span>
    )
}, {
  title: 'Вид спорта',
  dataIndex: 'sport_name',
  // colSpan: 4,
  key: 'sportName',
}, {
  title: 'Название',
  dataIndex: 'name',
  // colSpan: 8,
  key: 'name',
}, {
  title: 'Мест для 1Fit',
  dataIndex: 'max_users',
  // colSpan: 2,
  key: 'maxUsers',
}];

class TrainingList extends Component {
  render() {
    return (
      <Col span={24}>
        <Table
          locale={{ emptyText: 'На этот день нет тренировок' }}
          pagination={false}
          loading={this.props.isLoading}
          dataSource={this.props.trainings.map(t => ({
            ...t,
            key: t.id,
          }))}
          columns={columns} />
      </Col>
    )
  }
}

export default TrainingList;