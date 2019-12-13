import React, { Component } from "react";
import smurfContext from '../contexts/smurfContext';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';
import "./App.css";

const initialState = {
  smurfList: [],
  smurfForm: {
    name: '',
    age: '',
    height: '',

  }
}

class Provider extends React.Component {
  state = initialState;
  
  render() {
    return(
      <smurfContext.Provider value={{state: this.state}}>
        {this.props.children}
      </smurfContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Provider>
      <div className="App">
        <SmurfList />
        <SmurfForm />
      </div>
      </Provider>
    );
  }
}

export default App;
