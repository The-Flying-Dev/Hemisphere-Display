import React from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import HemisphereDisplay from './HemisphereDisplay';

class App extends React.Component {

  constructor(props) { //part of the React.Component class
    super(props)

    this.state = { latitude: 25 }

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude })
      },
      (error) => console.log(error)
    );
  }

  render() {
    return(
      <div>
        { this.state.latitude }
      </div>      
    )
  }
}



const root = createRoot(document.getElementById('root'));
root.render(<App />);