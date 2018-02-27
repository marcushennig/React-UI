import React, { Component } from 'react';
import MyClass from './Shared/test'

class App extends Component
{

  render() {

    let x = new MyClass(2);
    return (
        <h1>Hello Pi {x.getResult()}</h1>
    );
  }
}
export default App;