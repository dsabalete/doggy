import React from 'react'
import BreedItem from '../breed-item/BreedItem'

export default function BreedList(props) {
  return (
    <div className="col-sm-6">
      <h2>Breed List</h2>
      <div>
        {
          props.list.map((breed, index) =>
            <BreedItem key={index} item={breed} />
          )
        }
      </div>
    </div>
  )
}
