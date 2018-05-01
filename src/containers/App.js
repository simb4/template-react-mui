import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import MainPage from './Main'

import '../styles/index.css';


class App extends Component {
  render() {
    return (
      <MainPage />
    )
  }
}

export default App;
