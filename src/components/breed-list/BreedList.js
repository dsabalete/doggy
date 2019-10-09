import React, { Component } from 'react'
import BreedItem from '../breed-item/BreedItem'

export default class BreedList extends Component {

  render() {
    return (
      <div className="container">
        <h2>Breed List</h2>
        <div>
          {
            this.state.breeds.map((breed, index) =>
              <BreedItem key={index} item={breed} />
            )
          }
        </div>
      </div>
    )
  }
}
