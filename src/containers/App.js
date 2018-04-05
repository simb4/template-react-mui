import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MainPage from './Main'
// import {
// 	blue700,
// 	cyan500,
// 	blueA700,
// } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#2F80ED',
    primary2Color: 'rgba(47, 128, 237, 0.16)',
    accent1Color: '#828282',
  },
});

class App extends Component {
  render() {
    return (
    	<MuiThemeProvider muiTheme={muiTheme}>
    		<MainPage />
    	</MuiThemeProvider>
    )
  }
}

export default App;
