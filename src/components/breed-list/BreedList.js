import React, { Component } from 'react'
import BreedItem from '../breed-item/BreedItem'
import _ from 'lodash'

export default class BreedList extends Component {
    state = {
        breeds: [],
        breedsNum: []
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

        breeds.forEach(async breed =>
            await this.getNumImagesBreed(breed)
                .then(num => {
                    this.setState(prevState => {
                        let arr = prevState.breeds
                        arr.push({ name: breed, num: num })
                        return {
                            ...prevState,
                            breeds: arr
                        }
                    })
                })
        )
    }

    render() {
        // console.log(this.state.breeds)
        return (
            <div>
                {_.isEmpty(this.state.breeds) && 'Loading...'}
                <div>
                    {this.state.breeds.map(breed => <BreedItem item={breed} />)}
                </div>
            </div>
        )
    }
}
