import React, { useEffect } from 'react'
import ItemList from '../ItemList/ItemList';

const ListContainer = ({attendees}) => {

  return (
    <div className='bg-white p-4 rounded-xl'>
        <h2>Lista de asistentes</h2>
        <div className=' '>
            <div className=' flex justify-between items-center px-4 py-2 border-b-1'>
                <span>Nompre</span>
                <span>Status</span>
            </div>
                <ItemList attendees={attendees}/>
        </div>
    </div>
  )
}

export default ListContainer