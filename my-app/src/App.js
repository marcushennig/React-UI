import React, { Component } from 'react';

class App extends Component {

  render() {

    let x = new MyClass(2);
    return (
        <h1>Hello number {x.getResult()+3}</h1>
    );
  }
}
export default App;
