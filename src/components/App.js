import React from 'react';
import BreedList from './breed-list/BreedList'
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <BreedList />
        </div>
        <div className="col-sm-6">
          PieChart
        </div>
      </div>

    </div>
  );
}

export default App;
