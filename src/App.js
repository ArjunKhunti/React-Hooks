import React from 'react';
import './App.css';
import HooksCounter from './components/use-state/HooksCounter'
import HooksCounterTwo from './components/hooks-previous-state/HooksCounterTwo'
function App() {
  return (
    <div className="App">
      {/* <HooksCounter></HooksCounter> */}
      <HooksCounterTwo></HooksCounterTwo>
    </div>
  );
}

export default App;
