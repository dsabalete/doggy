import React, { Component } from 'react'
import BreedItem from './breed-item/BreedItem'
import Loading from './loading/Loading'
import MyPieChart from './pie-chart/MyPieChart'
import './App.css'

export default class App extends Component {
  state = {
    breeds: [],
    isLoading: true
  }

  fetchAllBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => Object.keys(data.message))
  }

  getNumImagesBreed(name) {
    return fetch(`https://dog.ceo/api/breed/${name}/images`)
      .then(response => response.json())
      .then(data => data.message.length)
  }

  async componentDidMount() {
    const breeds = await this.fetchAllBreeds()

    let calls = 0

    breeds.forEach(async (breed, index) => {
      calls++
      return await this.getNumImagesBreed(breed)
        .then(num => {
          calls--
          this.setState(prevState => {
            let arr = prevState.breeds
            arr.push({ name: breed, num: num })
            return {
              ...prevState,
              breeds: arr,
              isLoading: calls !== 0
            }
          })
        })
    })
  }

  renderBreedList() {
    return (
      <div>
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

  render() {
    return (
      <div className="container" >
        {
          this.state.isLoading ?
            <Loading /> :
            <div className="row">

              <div className="col-sm-6">
                {
                  this.renderBreedList()
                }
              </div>

              <div className="col-sm-6">
                <MyPieChart data={this.state.breeds} />
              </div>

            </div>
        }
      </div>
    );
  }
}
