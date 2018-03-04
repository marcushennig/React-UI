

import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';

//@flow
function concat(a: string, b: string) {
  return a + b;
}

function DatePicker(props) {
  return(
    <div>
      Imagine a {props.color} datepicker here.
    </div>
  );
}
function Item(props) {
  return(
    <li key={props.key}>
      {props.message}
    </li>
  );
}

function TodoList() {
  const todos = ['finish doc', 'submit pr', 'nag dan to review'];
  return (
    <ul>
      {todos.map(message => <Item key={message} message={message}/>)}
    </ul>
  );
}
class TestComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
  }

  render() {
    return (
      <div>
        <button>
          {this.state.value}
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <MuiThemeProvider>
      <MyAwesomeReactComponent/>
      <DatePicker color="blue"/>
      <TestComponent value={"Hello"}/>
      <TodoList/>
    </MuiThemeProvider>);
}

export default App;