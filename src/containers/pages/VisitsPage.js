import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Select } from 'antd';

import * as fitnessActions from '../../actions/fitnessActions';

class _VisistsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {},
    }
  }
  componentDidUpdate() {}

  componentDidMount() {
    this.props.getSports();
  }
  onChangeStatus(status) {
    this.setState({
      fitler: { ...this.state.filter, status }
    });
  }
  onChangeSport(sport_type) {
    this.setState({
      fitler: { ...this.state.filter, sport_type }
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

            <Row type="flex" justify="end" align="middle">

              {/*<Table columns={columns} dataSource={visits} />*/}

            </Row>

          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  sports: state.fitness.sports,
  visits: state.visits,
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