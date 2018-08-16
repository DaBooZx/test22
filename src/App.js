import React, { Component } from 'react';
import './App.css';
import withOrder from './withOrder'

class App extends Component {


  state = { new: 0 };
  componentDidMount() {

  }
  render() {
    return (
      <div className="App">
        <p>
          {this.state.new}
        </p>
      </div>
    );
  }
}




export default withOrder(App);
