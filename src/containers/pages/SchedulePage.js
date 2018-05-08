import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'antd';
import DateSelect from '../../components/calendar/DateSelect';
import AddClassForm from '../../components/classes/AddClassForm';
import TrainingsList from '../../components/classes/TrainingsList';

import '../../utils/convert';
import * as fitnessActions from '../../actions/fitnessActions';

class _SchedulePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().startOfDay(),
    }
  }
  componentWillMount() {
    this.props.onGetSports();

    this.getTrainings();
  }
  onSelectDate = (date) => {
    this.setState({ date }, this.getTrainings);
  }
  getTrainings = () => {
    this.props.onGetTrainings({
      timestamp_start: this.state.date.startOfDay().toISOString(),
      timestamp_end: this.state.date.endOfDay().toISOString(),
    });
  }
  render() {
    return (
      <div>
        <Row>
          <DateSelect
            format="dd, D MMMM"
            deltaFunc="addDays"
            date={this.state.date}
            onSelect={this.onSelectDate}/>
        </Row>
        <Row>
          <AddClassForm
            sports={this.props.sports}
            date={this.state.date}
            onSubmit={this.props.onCreateTraining}/>
        </Row>
        <Row>
          <TrainingsList
            isLoading={this.props.isLoading}
            trainings={this.props.trainings} />
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  sports: state.fitness.sports,
  visits: state.fitness.visits,
  trainings: state.training.trainings,
  isLoading: state.training.trainingIsLoading,
})

const mapDispatchToProps = {
  onGetSports: fitnessActions.getSports,
  onGetTrainings: fitnessActions.getTrainings,
  onCreateTraining: fitnessActions.createTraining,
};

const SchedulePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_SchedulePage);

export default SchedulePage;