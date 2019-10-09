import React from 'react'

export default function BreedItem({ item }) {
    return (
        <div>
            {item.name} ({item.num})
        </div>
    )
}
