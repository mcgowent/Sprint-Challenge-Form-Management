import React from 'react';


import Forms from './Form'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App" >
        <button onClick={() => { console.log('I was Clicked') }}>Ball</button>

        <Forms />
      </div>
    );
  }
}

export default App;
