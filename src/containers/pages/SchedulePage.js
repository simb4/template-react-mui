import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'antd';
import DateSelect from '../../components/calendar/DateSelect';
import '../../utils/convert';
import * as fitnessActions from '../../actions/fitnessActions';

class _SchedulePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curDate: new Date().startOfDay(),
    }
  }
  render() {
    return (
      <div>
        <Row type="flex" justify="center">
          <DateSelect
            date={this.state.curDate}
            onSelect={(d) => {console.log('got',d)}}/>
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

const SchedulePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_SchedulePage);

export default SchedulePage;