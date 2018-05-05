import React, { Component } from 'react';
import { Table, Col, Icon, Avatar } from 'antd';
import _ from 'lodash';
import moment from 'moment';
import { SITE_URL } from '../../constants/server';

const statusProps = {
  CANCELED: {
    icon: <Icon type="close"/>,
    title: <span>Отменен</span>,
    className: 'status-cancel',
  },
  APPROVED: {
    icon: <Icon type="check"/>,
    title: <span>Подтвержден</span>,
    className: 'status-approve',
  },
  WAITING: {
    icon: <Icon type="loading" />,
    title: <span>Ожидается</span>,
    className: 'status-waiting',
  },
}

const getAvatar = (avatar) => {
  if (!avatar) return <Avatar icon="user" />
  return <Avatar src={SITE_URL + avatar.url} />
}

const columns = [{
  title: 'Имя алтета',
  dataIndex: 'user',
  key: 'user',
  render: (user) => (
    <div className="ant-row-flex ant-row-flex-middle user-cell">
      {getAvatar(user.avatar)}
      <span> {user.name} </span>
    </div>
  )
}, {
  title: 'Класс',
  dataIndex: 'training.name',
  key: 'trainingName',
}, {
  title: 'Время',
  dataIndex: 'training.start',
  key: 'trainingStart',
  render: (date) => (
    <span>{moment(date).format('hh:mm')}</span>
  )
}, {
  title: 'Статус',
  dataIndex: 'status',
  key: 'status',
  render: (status) => (
    <div className={"ant-row-flex ant-row-flex-middle " + statusProps[status].className}>
      {statusProps[status].icon}
      {statusProps[status].title}
    </div>
  )
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
          loading={this.props.isLoading}
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