import React, { Component } from "react";
import "./App.css";
import MyComponent from './MyComponent'
import BottomComponent from './BottomComponent'

class App extends Component {
  render() {
      return (
          <div className="App">

      <MyComponent />
      <BottomComponent />
          </div>
      );
  }
}

export default App;