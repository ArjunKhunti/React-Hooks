import React from 'react';
import './App.css';
import HooksCounter from './components/use-state/HooksCounter'
import HooksCounterTwo from './components/hooks-previous-state/HooksCounterTwo'
import HooksCounterThree from './components/hooks-object/HooksCounterThree';
function App() {
  return (
    <div className="App">
      {/* <HooksCounter></HooksCounter> */}
      {/* <HooksCounterTwo></HooksCounterTwo> */}
      <HooksCounterThree/>
    </div>
  );
}

export default App;
