import React, { Component } from 'react';
import { Table, Col } from 'antd';
import _ from 'lodash';

const columns = [{
  title: 'Имя алтета',
  dataIndex: 'user.name',
  key: 'user',
}, {
  title: 'Класс',
  dataIndex: 'training.name',
  key: 'trainingName',
}, {
  title: 'Время',
  dataIndex: 'training.start',
  key: 'trainingStart',
  render: (a) => (
    <span>{a}</span>
  )
}, {
  title: 'Статус',
  dataIndex: 'status',
  key: 'status',
}];

const data = [{
  key: '1',
  name: 'John Brown',
  trainingType: 'Crossfit',
  trainingStart: '07:00',
  status: 'approved',
}, {
  key: '2',
  name: 'John Brown',
  trainingType: 'Crossfit',
  trainingStart: '07:00',
  status: 'approved',
}, {
  key: '3',
  name: 'John Brown',
  trainingType: 'Crossfit',
  trainingStart: '07:00',
  status: 'approved',
}];


class VisitsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Col span={24}>
        <Table
          pagination={false}
          isLoading={this.props.isLoading}
          dataSource={this.props.visits.map(v => ({
            ...v,
            key: v.id,
          }))}
          columns={columns} />
      </Col>
    )
  }
}

export default VisitsTable;