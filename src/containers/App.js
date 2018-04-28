import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import MainPage from './Main'


class App extends Component {
  render() {
    return (
      <MainPage />
    )
  }
}

export default App;
