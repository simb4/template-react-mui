import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class _VisistsPage extends Component {
  
  componentDidUpdate() {}

  componentDidMount() {}

  render() {
    return (
      <div>
        Hello visits
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
};

const VisistsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_VisistsPage);

export default VisistsPage;