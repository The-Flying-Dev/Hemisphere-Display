import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
//import HemisphereDisplay from './HemisphereDisplay';

class App extends React.Component {

  constructor(props) { //part of the React.Component class
    super(props)

    this.state = { latitude: null, errorMessage: '' } //initial value for state,must be available when component is created

    window.navigator.geolocation.getCurrentPosition(
      (position) => {//callback function
        this.setState({ latitude: position.coords.latitude }) //changing state data
      },
      (error) => {
        this.setState({ errorMessage: error.message }) //changing state data
      }
    );
  }

  render() {
    //conditional rendering
    if(this.state.latitude && !this.state.errorMessage) {
      return<div>{ this.state.latitude }</div>
    }    
    if(!this.state.latitude && this.state.errorMessage) {
      return<div>{ this.state.errorMessage }</div>
    }  
    else {
      return<div>Loading...</div>
    }         
    
  }
}



const root = createRoot(document.getElementById('root'));
root.render(<App />);