import React from 'react'
import Item from '../Item/Item'

const ItemList = ({attendees}) => {
  return (
    <div>
        {
            attendees.map(item => <Item key={item._id}{...item}/> )
        }
    </div>
  )
}

export default ItemList