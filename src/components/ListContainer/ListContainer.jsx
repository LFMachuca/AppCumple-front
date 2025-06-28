import React, { useEffect } from 'react'
import ItemList from '../ItemList/ItemList';

const ListContainer = ({attendees}) => {

  return (
    <div className='bg-white p-4 rounded-xl'>
        <h2>Lista de asistentes</h2>
        <div className=' '>
            <div className=' flex justify-between gap-2 items-center px-2 py-2 border-b-1'>
        
                <span className='grow-1 '>Nompre</span>
               
               
                <span className='  text-center'>Status</span>
                <span className=' text-center'>+</span>
            </div>
                <ItemList attendees={attendees}/>
        </div>
    </div>
  )
}

export default ListContainer