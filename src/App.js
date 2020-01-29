import React from 'react';
import './App.css';
import DataFetching from './components/hooks-data-fetch/DataFetching';
function App() {
  return (
    <div className="App">
      {/* <HooksCounter></HooksCounter> */}
      {/* <HooksCounterTwo></HooksCounterTwo> */}
      {/* <HooksCounterThree/> */}
      {/* <HooksCounterFour /> */}
      {/* <HooksUseEffectCounter/> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      <DataFetching />
    </div>
  );
}

export default App;
