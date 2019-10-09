import React, { Component } from 'react'

import PieChart from 'react-minimal-pie-chart'

export default class MyPieChart extends Component {

    randomizeColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16)
    }

    getTop10() {
        return this.props.data
            .sort((a, b) => {
                return a.num - b.num
            })
            .reverse()
            .slice(0, 10)
    }

    render() {
        const top10breeds = this.getTop10()
        return (
            <div className="col-sm-6">
                <h2>Top 10 famous breeds</h2>
                <PieChart
                    data={
                        top10breeds.map(breed => ({
                            title: breed.name,
                            value: breed.num,
                            color: this.randomizeColor()
                        }))
                    }
                />
            </div >
        )
    }

}
