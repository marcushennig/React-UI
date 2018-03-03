import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';
import MyClass from './shared/test'

class App extends Component
{

  render() {

    let x = new MyClass(2);
    return (
      <MuiThemeProvider>
        <MyAwesomeReactComponent />
      </MuiThemeProvider>
    );
  }
}
export default App;