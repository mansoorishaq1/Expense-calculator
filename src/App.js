import React, { Component } from 'react';
import ExpenxeTracker from './containers/expense-calculator/expense-calculator';
import './App.css';


class App extends Component {
  state = {  
    
   }
  render() { 
    return (
       <div>
      <ExpenxeTracker></ExpenxeTracker>
      </div> );
  }
}
 
export default App;

