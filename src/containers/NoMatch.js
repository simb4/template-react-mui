import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import RaisedButton from 'material-ui/RaisedButton';

class _NoMatch extends Component {
  
  componentDidUpdate() {}

  componentDidMount() {}

  render() {
    return (
      <div className="not-found">
        <div>Whoops!</div>
        <p>
          Эта страница неизвестна или не существует
        </p>
        <Link to="/">
          <RaisedButton className="orangeBtn" label="Перейти на главную" primary={true} />
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
};

const NoMatch = connect(
  mapStateToProps,
  mapDispatchToProps
)(_NoMatch);

export default NoMatch;