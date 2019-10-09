import React from 'react'

export default function BreedItem({ item }) {
    console.log(item)
    return (
        <div>
            {item.name} ({item.num})
        </div>
    )
}
