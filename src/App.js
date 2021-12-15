import React from 'react';
import SimpleCounter from './features/SimpleCounter/SimpleCounter';
import './App.css';
import SimpleCounterFunc from './features/SimpleCounter/SimpleCounterFunc';
import Students from './features/Students/Students';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <SimpleCounterFunc /> */}
        {/* <SimpleCounter /> */}
        <Students />
      </header>
    </div>
  );
}

export default App;
