import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Row, Col, Select } from 'antd';
import VisistsTable from '../../components/visits/VisitsTable';

import * as fitnessActions from '../../actions/fitnessActions';

class _VisistsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        sport_type: null,
        status: null,
      },
    }
  }
  componentDidUpdate() {}

  componentDidMount() {
    this.props.getSports();
    this.applyFilters();
  }
  applyFilters() {
    let { sport_type, status } = this.state.filter;
    let startTime = new Date(); startTime.setHours(0,0,0,0);
    let endTime = new Date(); endTime.setHours(23,59,59,999);

    let data = {
      timestamp_start: startTime.toISOString(),
      timestamp_end: endTime.toISOString(),
    }
    if (!!sport_type) data = _.extend({ sport_type }, data);
    if (!!status) data = _.extend({ status }, data);

    this.props.getVisits(data);
  }
  onChangeStatus(status) {
    this.setState({
      filter: { ...this.state.filter, status }
    }, () => {
      this.applyFilters();
    });
  }
  onChangeSport(sport_type) {
    this.setState({
      filter: { ...this.state.filter, sport_type }
    }, () => {
      this.applyFilters();
    });
  }
  render() {
    return (
      <div>
        <Row type="flex" justify="space-between" align="middle">

          <Col span={12}>
            <div className="page-title">
              Записи на сегодня
            </div>
          </Col>

          <Col span={12}>
            <Row type="flex" justify="end" align="middle">
              <Col span={10} offset={3}>
                <Select
                  defaultValue={null}
                  style={{width: '100%'}}
                  onChange={this.onChangeStatus.bind(this)}>
                    <Option value={null}>Статус - любой</Option>
                    <Option value={'APPROVED'}>Подтвержден</Option>
                    <Option value={'WAITING'}>Ожидается</Option>
                    <Option value={'CANCELED'}>Отменен</Option>
                </Select>
              </Col>
              <Col span={10} offset={1}>
                <Select
                  defaultValue={null}
                  style={{width: '100%'}}
                  onChange={this.onChangeSport.bind(this)}>
                    <Option key={-1} value={null}>Класс - любой</Option>
                    {this.props.sports.map(sport =>
                      <Option key={sport.id} value={sport.id}>{sport.name}</Option>
                    )}
                </Select>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row type="flex" justify="center">
          <VisistsTable
            visits={this.props.visits}
            isLoading={this.props.isLoading} />
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  sports: state.fitness.sports,
  visits: state.fitness.visits,
  isLoading: state.fitness.visitsAreLoading,
})

const mapDispatchToProps = {
  getSports: fitnessActions.getSports,
  getVisits: fitnessActions.getVisits,
};

const VisistsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_VisistsPage);

export default VisistsPage;