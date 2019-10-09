import React, { Component } from 'react'
import BreedList from './breed-list/BreedList'
import './App.css'

export default class App extends Component {
  state = {
    isLoading: true
  }

  render() {
    return (
      <div className="container" >
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
}
