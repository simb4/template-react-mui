import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'antd';
import DateSelect from '../../components/calendar/DateSelect';
import AddClassForm from '../../components/classes/AddClassForm';

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
        <Row>
          <DateSelect
            date={this.state.curDate}
            onSelect={(d) => {console.log('got',d)}}/>
        </Row>
        <Row>
          <AddClassForm
            date={this.state.curDate} 
            onSubmit={this.props.onCreateClass}/>
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
  createClass: fitnessActions.onCreateClass,
};

const SchedulePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_SchedulePage);

export default SchedulePage;