import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Divider } from 'antd';
import DateSelect from '../../components/calendar/DateSelect';

import '../../utils/convert';
import * as fitnessActions from '../../actions/fitnessActions';

class _StatsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().startOfMonth(),
    }
  }
  componentWillMount() {
    this.getStats();
  }
  onSelectDate = (date) => {
    this.setState({ date }, this.getStats);
  }
  getStats = () => {
    this.props.onGetStats({
      timestamp_start: this.state.date.startOfMonth().toISOString(),
      timestamp_end: this.state.date.endOfMonth().toISOString(),
    });
  }
  renderNumber = (number, title) => (
    <div className="stat-number">
      <div className="number">{number}</div>
      <div className="title">{title}</div>
    </div>
  )
  render() {
    return (
      <div className="stat-container">
        <Row>
          <DateSelect
            format="MMMM"
            deltaFunc="addMonths"
            date={this.state.date}
            onSelect={this.onSelectDate} />
        </Row>
        <Row type="flex" justify="space-between">
          {this.renderNumber(this.props.stats.trainings, 'Классов')}
          {this.renderNumber(this.props.stats.visits, 'Посещений')}
          {this.renderNumber(this.props.stats.users, 'Атлетов')}
          {this.renderNumber(this.props.stats.money +' ₸', 'Заработано')}
        </Row>
        <Divider />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  stats: state.training.stats,
})

const mapDispatchToProps = {
  onGetStats: fitnessActions.getStats,
};

const StatsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_StatsPage);

export default StatsPage;