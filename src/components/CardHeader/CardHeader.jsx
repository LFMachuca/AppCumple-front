import React from 'react'

const CardHeader = ({children}) => {
  return (
    <div className='p-2 flex gap-2 flex-col items-center'>
      {children}
    </div>
  )
}

export default CardHeader